from genericpath import exists
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


async def getNew(request):
    db = request.database



    reddit = asyncpraw.Reddit(
    client_id="lhCAjKV2lNlVn0msO6isUQ",
    client_secret="sDVFmyCNxZSrZ6_Tod19dvqcv3az6w",
    user_agent="Ironman",
    )
    #milvus connect
    connections.connect("default", host="localhost", port="19530")

    logger.info("Starting Reddit fetch process ")
    channels = list(db['subreddits'].find())
    logger.info(channels)
    collection =  Collection(COLLECTION_NAME)
    dbmessages=[]
    for channel in channels:
        channelName = channel['search_name']
        channelId = channel["_id"]
        partitonId = channel["ext_id"]
        ids=[]
        messages=[]

        #embeddings=[]
        array = getExistingSubmissionsArray(partitionId=partitonId,db=db)
        subreddit = await reddit.subreddit(channelName)
        async for submission in subreddit.new(limit=1):
            if submission.id not in array:
                ids.append(BytesIntEncoder.encode(submission.id))
                messages.append(submission.title)
                dbmessages.append(process_submission(submission=submission,channelId=channelId,channelName=channelName))
                logger.info(f'new submision in r/{channelName} with id {submission.id}')
        embeddings = await nlp.embed(messages)
        if collection.has_partition(partitonId):
            mr = collection.insert(data=[ids,embeddings], partition_name=partitonId)
        else:
            collection.create_partition(partitonId)
            mr = collection.insert(data=[ids,embeddings], partition_name=partitonId)
    db["reddit_messages"].insert_many(dbmessages)
    logger.info("process finished")
    await reddit.close()

def getExistingSubmissionsArray(partitionId,db):
    array = []
    exist = db['reddit_messages'].find({"channel_id":partitionId})
    ids = [id["reddit_id"] for id in exist]
    return ids

def process_submission(submission,channelId,channelName):
    return {
    "reddit_id":submission.id,
    "channel_id":channelId,
    "channel_name":channelName,
    "title":submission.title,
    "self_text":submission.selftext,
    "url":submission.url,
    "score":submission.score,
    "date_created": submission.created_utc
    }



