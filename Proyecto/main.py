from fastapi import FastAPI
from contextlib import asynccontextmanager
from app.Controller.Controllers import router
from config.database import get_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.mongodb = await get_db()
    yield
    app.mongodb.client.close()

app = FastAPI(lifespan=lifespan)

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8084)
