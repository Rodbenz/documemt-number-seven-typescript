import axios from 'axios';

export async function UPD_REPORT_SEND() {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/UPD_REPORT_SEND`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function UPD_REPORT_SEND_PROV() {
    let url = `${process.env.REACT_APP_API_HOST}/REPORT/UPD_REPORT_SEND_PROV`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}