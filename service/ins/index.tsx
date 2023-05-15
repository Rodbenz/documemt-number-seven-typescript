import axios from "axios";
import { AddLoading, RemoveLoading } from "@/pages/components/@conponents/loadingscreen";

export async function InsImpInfo(datasend: any) {
    let url = `${process.env.REACT_APP_API_HOST}/IMPORT/ImpInfo`
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
export async function InsPracels(datasend: any) {
    let url = `${process.env.REACT_APP_API_HOST}/IMPORT/InsParcelS7`
    let newdata: any = []
    AddLoading()
    for (let i = 0; i < datasend.length; i++) {
        let dataSet = datasend[i];
        dataSet.OptID = String(dataSet.OptID)
        dataSet.OptTypeID = String(dataSet.OptTypeID)
        dataSet.LandTypeID = String(dataSet.LandTypeID)
        dataSet.SEMI_CODE = String(dataSet.SEMI_CODE)
        dataSet.PARCEL_TYP = String(dataSet.PARCEL_TYP)
        try {
            let res = await axios.post(url, dataSet)
            let data = res.data
            // console.log(data,'data');
            newdata.push(data[0])
        } catch {
            RemoveLoading()
            return false
        }
    }
    RemoveLoading()
    return newdata
}
export async function InsPracelsAll(datasend: any, tableName: string) {
    let url = `${process.env.REACT_APP_API_HOST}/IMPORT/${tableName}`;
    let newdata: any = []
    AddLoading()
    for (let i = 0; i < datasend.length; i++) {
        let dataSet = datasend[i];
        dataSet.OptID = String(dataSet.OptID);
        dataSet.LandTypeID = String(dataSet.LandTypeID);
        dataSet.SEMI_CODE = String(dataSet.SEMI_CODE);
        dataSet.MPO_ID = dataSet.MPO_ID ? String(dataSet.MPO_ID) : "";
        dataSet.UTMLANDNO = dataSet.UTMLANDNO ? String(dataSet.UTMLANDNO) : "";
        try {
            let res = await axios.post(url, dataSet)
            let data = res.data
            console.log(data,'data');
            newdata.push(data[0])
        } catch {
            RemoveLoading()
            return false
        }
    }
    RemoveLoading()
    return newdata
}