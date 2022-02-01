from fastapi import APIRouter , status, HTTPException
from fastapi.params import Body
from bson import ObjectId

from database import DataBerat, UpdateDataBerat, col_berat, beratSerialize, beratToList

route_berat = APIRouter()

#retrieve data berat
@route_berat.get("/api/berat/")
async def getAllBerat():
    result = beratToList(col_berat.find())
    return result

@route_berat.get("/api/berat/{id}")
async def getBeratById(id:str):
    if col_berat.count_documents({"_id":ObjectId(id)}) == 0:
        raise HTTPException(404,detail="Data not exist")
    result = beratSerialize(col_berat.find_one({"_id":ObjectId(id)}))
    return result

#post data berat
@route_berat.post("/api/berat", status_code=status.HTTP_201_CREATED)
async def createDataBerat(berat:DataBerat):
    _id = col_berat.insert_one(dict(berat))
    result = beratToList(col_berat.find({"_id":_id.inserted_id}))
    return result

## update data
@route_berat.put("/api/berat/{id}",status_code=status.HTTP_201_CREATED)
async def updateBerat(id:str, berat:UpdateDataBerat=Body(...)):
    berat = {k:v for k,v in berat.dict().items() if v is not None}
    if col_berat.count_documents({"_id":ObjectId(id)}) == 0:
        raise HTTPException(404, detail="Data not exist")
    
    if len(berat)>0:
        col_berat.find_one_and_update({"_id":ObjectId(id)},{"$set": berat})
    result = beratToList(col_berat.find({"_id":ObjectId(id)}))
    return result

## delete data
@route_berat.delete("/api/berat/{id}")
async def deleteBerat(id:str):
    col_berat.find_one_and_delete({"_id": ObjectId(id)})
    return {"Status": "Deleted"}