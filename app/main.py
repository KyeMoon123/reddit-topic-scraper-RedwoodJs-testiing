from asyncio.log import logger
from typing import Union
from fastapi import FastAPI
from src.controller import semanticSearchController
from src.controller import redditController

from fastapi import FastAPI, HTTPException
from starlette.requests import Request
from starlette.responses import Response
from dotenv import dotenv_values
from pymongo import MongoClient


config = dotenv_values(".env")
app = FastAPI()

app.include_router(semanticSearchController.router)
app.include_router(redditController.router)

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    logger.info("connected to mongoDB")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
def read_root():
    return {"Server Is Running"}
