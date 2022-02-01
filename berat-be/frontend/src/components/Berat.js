import axios from 'axios'
import React from 'react'

function BeratItem(props) {
    const deleteBeratHandler = (id) => {
    axios.delete(`http://localhost:8001/api/berat/${id}`)
        .then(res => console.log(res.data)) }

    // const updateBeratHandler = (id) => {
    // axios.post(`http://localhost:8001/api/berat/${id}`, {berat_max: berat_max, berat_min: berat_min })
    //   .then(res => console.log(res)
    //   )};
    return (
        <div>
            <td>
                
                {/* <button onClick={() => updateBeratHandler(props.berat.id)} className="btn btn-outline-info my-2 mx-2" style={{'borderRadius':'50px',}}>X</button> */}
                <button onClick={() => deleteBeratHandler(props.berat.id)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'50px',}}>X</button>
                <hr></hr>
                </td>
        </div>
    )
    
    
}

export default BeratItem;