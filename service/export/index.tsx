import { AddLoading, RemoveLoading } from "@/pages/components/@conponents/loadingscreen";
import axios from "axios";

export async function UpdTranferDataTal(datasand:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/UpdTranferDataTal`
    AddLoading()
    try {
        let res = await axios.post(url, datasand)
        let data = res.data
        console.log(data,'UpdTranferDataTal');
        
        RemoveLoading()
        return data
    } catch {
        RemoveLoading()
        return false
    }
}