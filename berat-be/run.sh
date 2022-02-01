#!/bin/bash

cd backend 
uvicorn main:app --reload --port 8001 &
cd ../frontend 
npm start
