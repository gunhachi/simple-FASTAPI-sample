import BeratItem from "./Berat"
import moment from 'moment'

export default function BeratTable(props){
    return(
        <tbody>
                        
        {props.beratList.map((val,key) =>{
            return(
            <tr key={key}>
                
                <td>{moment(val.tanggal).format('YYYY-MM-DD')}</td>
                <td>{val.berat_max}</td>
                <td>{val.berat_min}</td>
                <td>{val.berat_max-val.berat_min}</td>
                <BeratItem berat={val}></BeratItem>
            </tr>)})}
        </tbody>
    )
}