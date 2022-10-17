import redis
import os
from dotenv import load_dotenv
from redis.commands.json.path import Path
from pymilvus import *
from src.service import nlp
import asyncio
import numpy as np

load_dotenv()

COLLECTION_NAME = 'Messages'
PARTITION_NAME = 'Reddit'
def createCollection():
    connections.connect("default", host="localhost", port="19530")

    pk = FieldSchema(name='pk', dtype=DataType.INT64, is_primary=True, auto_id=False)
    field = FieldSchema(name='vec', dtype=DataType.FLOAT_VECTOR, dim=384)
    schema = CollectionSchema(fields=[pk, field], description="Semantic Search")

    collection = Collection(name=COLLECTION_NAME, schema=schema)
    partition = collection.create_partition(PARTITION_NAME)
    print(collection)
    print(partition)

def dropCollection():
    connections.connect("default", host="localhost", port="19530")
    if utility._get_connection("default").has_collection(COLLECTION_NAME): # drop the same collection created before
        collection = Collection(COLLECTION_NAME)
        collection.drop()


createCollection()
