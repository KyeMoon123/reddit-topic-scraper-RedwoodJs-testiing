import logging
from sentence_transformers import SentenceTransformer, util
import redis
import os
from dotenv import load_dotenv
from pymilvus import *


from ..helpers.helpers import BytesIntEncoder


embedder = SentenceTransformer('all-MiniLM-L6-v2')
logger = logging.getLogger(__name__)

load_dotenv()

r = redis.Redis(
host=os.environ.get("REDIS_HOST"),
port=os.environ.get("REDIS_PORT"),
password=os.environ.get("REDIS_PASSWORD"))

client = connections.connect("default", host="localhost", port="19530")
collection = Collection(os.environ.get("COLLECTION_NAME"))
collection.load() # load collection memory before search

async def embed(list):
    embedding = embedder.encode(list, convert_to_numpy=True)
    logger.info(len(embedding))

    return embedding


async def semanticSearch(query,partitions):
    logger.info(partitions.subs)
    topK = 10
    SEARCH_PARAM = {
        "metric_type":"L2",
        "params":{"nprobe": 20},
    }
    embedding =  await embed(query)
    results = collection.search([embedding],"vec",param=SEARCH_PARAM,partition_names=partitions.subs, limit=topK, expr=None, output_fields=None)
    I = []
    for x in results:
        for y in x.ids:
            I.append(BytesIntEncoder.decode(y))
    recall_results = []
    for x in I:
        recall_results.append(r.hgetall("message:{}".format(x)))
    return recall_results

