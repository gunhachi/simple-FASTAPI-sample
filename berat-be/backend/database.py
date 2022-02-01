from pydantic import BaseModel
from datetime import datetime
from pymongo import MongoClient

## connection to database
conn = MongoClient('mongodb://localhost:5000/')
database = conn['Database_Berat']
col_berat = database['data_berat']

## data constructor
class DataBerat(BaseModel):
    tanggal : datetime
    berat_max : int
    berat_min : int

class UpdateDataBerat(BaseModel):
    berat_max : int
    berat_min : int


## serializing data function
def beratSerialize(berat) -> dict:
    return{
        "id":str(berat["_id"]),
        "tanggal":berat["tanggal"],
        "berat_max":berat["berat_max"],
        "berat_min":berat["berat_min"]
    }

def beratToList(berat_l) -> list:
    return [beratSerialize(berat) for berat in berat_l]