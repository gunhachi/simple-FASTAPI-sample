from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200

def test_read_berat():
    response = client.get("/api/berat")
    assert response.status_code == 200

def test_create_berat():
    response = client.post("/api/berat",
    headers={"Content-Type":"application/json"},
    json={"tanggal":"2020-2-2","berat_max":20,"berat_min":20})
    assert response.status_code == 201
