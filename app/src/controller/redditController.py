from array import array
from base64 import decode
import imp
from operator import imod
from urllib import request
from fastapi import APIRouter,Request

from ..service.Reddit import getNew
from ..service.nlp import semanticSearch
from pydantic import BaseModel


router = APIRouter(
    prefix="/reddit",
    tags=["Reddit Services"],
    responses={404: {"description": "Not found"}},
)

@router.get("/getnew")
async def get_new(request: Request):
    await getNew(request.app)

class Partitions(BaseModel):
    subs: list = [str]


@router.get("/semanticquery/")
async def semantic_search(query,partitions:Partitions):
    result = await semanticSearch(query=query, partitions=partitions)
    return result




