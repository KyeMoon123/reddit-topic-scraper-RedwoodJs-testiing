import logging
import asyncpraw
import redis
import os
from dotenv import load_dotenv
from supabase import create_client, Client
from . import nlp
from pymilvus import *
import json
from ..helpers.helpers import BytesIntEncoder

load_dotenv()  # take environment variables from .env.
logger = logging.getLogger(__name__)
COLLECTION_NAME = 'Messages'

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

async def getNew():

    r = redis.Redis(
    host=os.environ.get("REDIS_HOST"),
    port=os.environ.get("REDIS_PORT"),
    password=os.environ.get("REDIS_PASSWORD"))

    reddit = asyncpraw.Reddit(
    client_id="lhCAjKV2lNlVn0msO6isUQ",
    client_secret="sDVFmyCNxZSrZ6_Tod19dvqcv3az6w",
    user_agent="Ironman",
    )
    connections.connect("default", host="localhost", port="19530")

    logger.info("Starting Reddit fetch process ")
    channels = supabase.table("Subreddit").select('*').execute()
    collection =  Collection(COLLECTION_NAME)

    for channel in channels.data:
        channelName = channel['search_name']
        channelId = channel["id"]
        partitonId = channel["ext_id"]
        ids=[]
        messages=[]
        embeddings=[]
        array = getExistingSubmissionsArray(channelId=channelId,r=r)
        subreddit = await reddit.subreddit(channelName)
        async for submission in subreddit.new(limit=20):
            if submission.id not in array:
                ids.append(BytesIntEncoder.encode(submission.id))
                messages.append(submission.title)
                process_submission(submission=submission,channelId=channelId,channelName=channelName,r=r) ## push message to redis
                logger.info(f'new submision in r/{channelName} with id {submission.id}')
        embeddings = await nlp.embed(messages)
        if collection.has_partition(partitonId):
            mr = collection.insert(data=[ids,embeddings], partition_name=partitonId)
        else:
            collection.create_partition(partitonId)
            mr = collection.insert(data=[ids,embeddings], partition_name=partitonId)
        print("Record count in collection: " + str(collection.num_entities))
    await reddit.close()

def getExistingSubmissionsArray(channelId,r):
    array = []
    for key in r.scan_iter("*:1"):
        array.append(key.decode("utf-8")[:6])
    return array

def process_submission(submission,channelId,channelName,r):
    r.sadd("channel:{}".format(channelId),submission.id)
    r.hset("message:{}".format(submission.id),"reddit_id",submission.id)
    r.hset("message:{}".format(submission.id),"channel_id",channelId)
    r.hset("message:{}".format(submission.id),"channel_name",channelName)
    r.hset("message:{}".format(submission.id),"title",submission.title)
    r.hset("message:{}".format(submission.id),"self_text",submission.selftext)
    r.hset("message:{}".format(submission.id),"url",submission.url)
    r.hset("message:{}".format(submission.id),"score",submission.score)
    r.hset("message:{}".format(submission.id),"date_created",submission.created_utc)


