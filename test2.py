from typing import Annotated, Union
from fastapi import FastAPI,Query
from pydantic import BaseModel
import uvicorn

app = FastAPI()

class Item(BaseModel):
    message: str

@app.post("/post-example/")
async def create_item(item: Item):
    print(item.message)
    return {"message": f"Received message: {item.message}"}

if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')
