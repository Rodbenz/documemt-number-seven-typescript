import axios from 'axios';
import { AddLoading, RemoveLoading } from "@/pages/components/@conponents/loadingscreen";

export async function dagRuns(datasend: any) {
    let url = `${process.env.REACT_APP_API_AIRFLOW}/dageRun`

    try {
        let res = await axios.post(url, datasend)
        let data = res.data;
        return data
    } catch {
        return false
    }
}
export async function dagRunsCofig(datasend: any) {
    let url = `${process.env.REACT_APP_API_AIRFLOW}/dageRunConfig`

    try {
        let res = await axios.post(url, datasend)
        let data = res.data;
        return data
    } catch {
        return false
    }
}
export async function taskInstances(datasend: any) {
    let url = `${process.env.REACT_APP_API_AIRFLOW}/taskInstances`

    try {
        let res: any = await axios.post(url, datasend)
        let data = res.data.task_instances;
        return data
    } catch {
        return false
    }
}
export async function taskInstancesLog(datasend: any) {
    let url = `${process.env.REACT_APP_API_AIRFLOW}/taskInstancesLog`

    try {
        let res = await axios.post(url, datasend)
        let data = res.data;
        return data
    } catch {
        return false
    }
}
export async function DATASUMMARY(datasend: any) {
    let url = `${process.env.REACT_APP_API_HOST}/Airflow/DATASUMMARY`;
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