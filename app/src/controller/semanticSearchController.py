from fastapi import APIRouter

router = APIRouter(
    prefix="/search",
    tags=["items"],
    responses={404: {"description": "Not found"}},
)

@router.get("/search")
async def search_test():
   return

