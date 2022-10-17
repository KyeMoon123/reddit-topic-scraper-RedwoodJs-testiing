from typing import Union
from fastapi import FastAPI
from src.controller import semanticSearchController
from src.controller import redditController

from fastapi import FastAPI, HTTPException
from starlette.requests import Request
from starlette.responses import Response

app = FastAPI()

app.include_router(semanticSearchController.router)
app.include_router(redditController.router)


@app.get("/")
def read_root():
    return {"Server Is Running"}
