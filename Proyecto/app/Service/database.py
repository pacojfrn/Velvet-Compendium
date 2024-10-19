from motor.motor_asyncio import AsyncIOMotorClient

async def get_db():
    client = AsyncIOMotorClient("mongodb://mongo:27019")
    db = client["Compendium"] 
    return db
