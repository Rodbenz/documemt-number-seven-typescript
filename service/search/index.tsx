import axios from 'axios';
import { AddLoading, RemoveLoading } from "@/pages/components/@conponents/loadingscreen";

export async function SelectDataPdsDol(datasend: any) {
    let url = `${process.env.REACT_APP_API_HOST}/mas/SelectDataPdsDol`;
    AddLoading()
    try {
        let res = await axios.post(url, datasend)
        let data = res.data
        RemoveLoading()
        return data
    } catch {
        RemoveLoading()
        return false
    }
}
export async function SEARCH_ONLY_BETW(datasend: any) {
    let url = `${process.env.REACT_APP_API_BETW}/SEARCH/MIS/SEARCH_ONLY_BETW`;
    
    AddLoading()
    try {
        let res = await axios.post(url, datasend)
        let data = res.data
        RemoveLoading()
        return data
    } catch {
        RemoveLoading()
        return false
    }
}
export async function SEARCH_ONLY_BETW_NS3K(datasend: any) {
    let url = `${process.env.REACT_APP_API_BETW}/SEARCH/MIS/SEARCH_ONLY_BETW_NS3K`;
    
    AddLoading()
    try {
        let res = await axios.post(url, datasend)
        let data = res.data
        RemoveLoading()
        return data
    } catch {
        RemoveLoading()
        return false
    }
}