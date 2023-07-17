import axios from 'axios';
import { AddLoading, RemoveLoading } from "@/pages/components/@conponents/loadingscreen";

export async function reportLandS7(datasend: any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/Report_Land_S7`;
    AddLoading()
    try {
        let res = await axios.post(url, datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function reportLandS7Ns3k(datasend: any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/Report_Land_S7_NS3K`;
    AddLoading()
    try {
        let res = await axios.post(url, datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function reportLandCountS7() {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/Report_Land_Count_S7`;
    AddLoading()
    try {
        let res = await axios.get(url)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function reportLandCountS7Ns3k() {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/Report_Land_Count_S7_NS3K`;
    AddLoading()
    try {
        let res = await axios.get(url)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function ReportLandCondo(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/ReportLandCondo`;
    console.log(datasend,'ReportLandCondo');
    
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function ReportLandCondoCountChanode(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/ReportLandCondoCountChanode`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function ReportLandCondoCountNs3A(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/ReportLandCondoCountNs3A`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function SelTranferDataTal(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/SelTranferDataTal`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function ReportChangChanode(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/ReportChangChanode`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function ReportChangChanodeDol(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/ReportChangChanodeDol`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function ReportChangNs3k(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/ReportChangNs3k`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function ReportChangData(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/ReportChangData`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function ReportSelPDS_Val(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/SelPDS_Val`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_RECEIVE(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_RECEIVE`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_RECEIVE_changwat(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_RECEIVE_changwat`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_RECEIVE_BranchCode(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_RECEIVE_BranchCode`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_USED_TYPE411(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_USED_TYPE411`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_USED_ALL411(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_USED_ALL411`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_RECEIVE_ALL(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_RECEIVE_ALL`;
    AddLoading()
    try {
        let res = await axios.post(url,datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_SEND(id:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_SEND${id}`;
    AddLoading()
    try {
        let res = await axios.get(url)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_SEND_changwat() {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_SEND_changwat`;
    AddLoading()
    try {
        let res = await axios.get(url)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_SEND_ALL(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_SEND_ALL`;
    AddLoading()
    try {
        let res = await axios.post(url, datasend)
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}
export async function REPORT_SEND_PROVINCE(datasend:any) {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/REPORT_SEND_changwat`;
    AddLoading()
    try {
        let res = await axios.post(url, datasend)
        console.log(res,'5555555555555555');
        
        let data = res.data
        RemoveLoading()
        return data.result
    } catch {
        RemoveLoading()
        return false
    }
}