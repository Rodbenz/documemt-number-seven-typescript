import axios from "axios";

export async function delDags(dag: string, datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/Airflow/DEL_${dag}`;

    try{
        let res = await axios.post(url, datasend);
        console.log(res,'delDags');  
        return res;
    }catch(e){
        console.log(e);
    }
}