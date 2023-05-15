import axios from 'axios';

export async function masSelGovType() {
    let url = `${process.env.REACT_APP_API_HOST}/mas/SelGovType`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masSelTypeCode(datasand:any) {
    let url = `${process.env.REACT_APP_API_HOST}/mas/SelTypeCode`
    console.log(url);

    try {
        let res = await axios.post(url, datasand)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masSubDocTypeT2() {
    let url = `${process.env.REACT_APP_API_HOST}/mas/SubDocTypeT2`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masSelSubCodeByID(id: number) {
    let url = `${process.env.REACT_APP_API_HOST}/mas/SelSubCode/${id}`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masSelSemiCodeByID(type: string) {
    let url = `${process.env.REACT_APP_API_HOST}/mas/SelSemiCode`
    let datasend: any = {
        "TYPE_CODE": String(type)
    }
    try {
        let res = await axios.post(url, datasend)
        let data = res.data
        return data
    } catch {
        return false
    }
}

export async function masProvince() {
    let url = `${process.env.REACT_APP_API_URL}/MAS/selProvince`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}

export async function masBracnch(dataset: any) {
    let url = `${process.env.REACT_APP_API_URL}/MAS/provinceBybranch`
    dataset.CHANGWAT_CODE = dataset.PROVINCE_ID
    // console.log(dataset, 'dataset');
    try {
        let res = await axios.post(url, dataset)
        let data = res.data
        return data
    }
    catch {
        return false
    }

}

export async function masMonth() {
    let url = `${process.env.REACT_APP_API_HOST}/MAS/Month`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masYears() {
    let url = `${process.env.REACT_APP_API_HOST}/MAS/Years`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masPeriods() {
    let url = `${process.env.REACT_APP_API_HOST}/MAS/Periods`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masTypeDol() {
    let url = `${process.env.REACT_APP_API_HOST}/MAS/TypeDol`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masStatus_R() {
    let url = `${process.env.REACT_APP_API_HOST}/MAS/Status_R`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function masMunisan() {
    let url = `${process.env.REACT_APP_API_HOST}/MAS/Munisan`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}

export async function amphurByPK(datasand:any) {
    let url = `${process.env.REACT_APP_API_EPVLINK}/MAS/amphurBByPK`
    console.log(url);

    try {
        let res = await axios.post(url, datasand)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function amphurByProvinceId(provinceId:any) {
    let url = `${process.env.REACT_APP_API_HOST}/MAS/Amphur/${provinceId}`
    console.log(url);

    try {
        let res = await axios.get(url)
        let data = res.data
        return data
    } catch {
        return false
    }
}
export async function tambonByPK(datasand:any) {
    let url = `${process.env.REACT_APP_API_EPVLINK}/MAS/tumbonBByPK`
    console.log(url);

    try {
        let res = await axios.post(url, datasand)
        let data = res.data
        return data
    } catch {
        return false
    }
}

