import "bootstrap/dist/css/bootstrap.min.css";
import {useState,useEffect} from 'react';
import { Button,Modal,Input } from 'react-bootstrap';
import axios from 'axios';
import BeratTable from "./components/BeratTableView";

function Home() {
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [beratList, setBeratList] = useState([{}])
    const [tanggal, setTanggal] = useState()
    const [berat_max, setBerMax] = useState()
    const [berat_min, setBerMin] = useState()
    const [total_bmax, setTotalBmax] = useState(0)
    const [total_bmin, setTotalBmin] = useState(0)
    const [avg, setDifTotal] = useState(0)

    // const [a, setA] = useState()
    // const [b, setB] = useState()
    // const [c, setC] = useState()

    //fetch data
    useEffect(() => {
      axios.get('http://localhost:8001/api/berat/')
        .then(res => {
          setBeratList(res.data)
          let berat_max = 0
          let berat_min = 0
          let avg_ = 0
          res.data.forEach(e => {
            berat_max += e.berat_max
            berat_min += e.berat_min
            avg_ += (e.berat_max-e.berat_min)
          });
          setTotalBmax(berat_max)
          setTotalBmin(berat_min)
          setDifTotal(avg_)
        })
    },[]);

 const getData = () =>{
    axios.get('http://localhost:8001/api/berat/')
    .then(res => {
      setBeratList(res.data)
      let berat_max = 0
      let berat_min = 0
      let avg_ = 0
      res.data.forEach(e => {
        berat_max += e.berat_max
        berat_min += e.berat_min
        avg_ += (e.berat_max-e.berat_min)
      });
      setTotalBmax(berat_max)
      setTotalBmin(berat_min)
      setDifTotal(avg_)
    })
 }
    const addBeratHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8001/api/berat', {tanggal: new Date(tanggal), berat_max: berat_max, berat_min: berat_min })
          .then(res => console.log(res)
          )};

    const updateBeratHandler = (id) => {
      axios.post(`http://localhost:8001/api/berat/${id}`, {berat_max: berat_max, berat_min: berat_min })
        .then(res => console.log(res)
        )};
    
    const delHandler = (id) => {
        axios.delete(`http://localhost:8001/api/berat/${id}`)
            .then(res => console.log(res)
        )};
        
  return (
 
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">  
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Data Berat Badan</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Tambah Data
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Tanggal</th>
                            <th>Berat Max</th>
                            <th>Berat Min</th>
                            <th>Perbedaan</th>
                        </tr>
                    </thead>
                    <BeratTable beratList={beratList}/>
                    <thead>
                        <tr>
                            <th>Rata-rata</th>
                            <th>{total_bmax/beratList.length}</th>
                            <th>{total_bmin/beratList.length}</th>
                            <th>{avg/beratList.length}</th>
                        </tr>
                    </thead>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Data Baru</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form onSubmit={addBeratHandler}>
                <div class="form-group">
                    <input type="date" class="form-control" id="inputDate" onChange={event => setTanggal(event.target.value)} placeholder="Masukkan Tanggal"/>
                </div>
                <div class="form-group mt-3">
                    <input type="number" class="form-control" id="inputBMax" onChange={event => setBerMax(event.target.value)} placeholder="Masukkan Berat Max"/>
                </div>
                <div class="form-group mt-3">
                    <input type="number" class="form-control" id="inputBMin" onChange={event => setBerMin(event.target.value)} placeholder="Masukkan Berat Min"/>
                </div>
                  <button type="submit" className="btn btn-outline-primary mx-2 mt-3 mb-3"style={{'borderRadius':'50px'}}  >Tambah</button>
                </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
  );
}
 
export default Home;