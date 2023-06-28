import { right } from "./dataControl";
import month from "./month";

export function setUTM_NO_P(utmnop: any) {
    if (utmnop == 0 || utmnop == null || utmnop == undefined || utmnop == '') {
        return '';
    }
    if (utmnop == 1) {
        return 'I';
    } else if (utmnop == 2) {
        return 'II';
    } else if (utmnop == 3) {
        return 'III';
    } else if (utmnop == 4) {
        return 'IV';
    }
}

export const numberWithCommas = (x: any) => {
    try {
        var parts = String(x).split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    } catch
    {
        return null
    }
}

export const dateFormat = (date: any, props = ['d', 'm', 'y'], col = "MONTH_NAME_TH", yearDiff = 543, indicator = " ", dayDigit = 1) => {
    if (!date) {
        return ""
    }
    try {
        let newdate = date.split("-")
        let year = newdate[0]
        let m = newdate[1]
        let d = newdate[2]
        let mname = ""
        // console.log(m)
        for (var i in month) {
            if (month[i].MONTH_ID == m) {
                mname = month[i][col]
            }
        }
        let result = ""
        if (props.includes('d')) {
            if (dayDigit == 1) {
                result += String(parseInt(d))
            }
            if (dayDigit == 2) {
                d = right('00' + String(parseInt(d)), 2)
                result += d
            }
        }
        if (props.includes('m')) {
            result += indicator + mname
        }
        if (props.includes('y')) {
            result += indicator + (parseInt(year) + yearDiff)
        }
        return result
        // return String(parseInt(d)) + " " + mname + " " + (parseInt(year) + 543)
    }
    catch {
        return false
    }
}

export const dateFormatTime = (date:any, method:any = null) => {
    if (method == null) {
        method = 'MONTH_NAME_TH'
    }

    if (date == null) {
        return ""
    }
    let datex = date.split("T")
    
    try {
        let newdate = datex[0].split("-")
        let year = newdate[0]
        let m = newdate[1]
        let d = newdate[2]
        let mname = ""

        for (var i in month) {
            if (month[i].MONTH_ID == m) {
                mname = month[i].MONTH_NAME_TH
            }
        }
        return String(parseInt(d)) + " " + mname + " " + (parseInt(year) + 543)
    }
    catch {
        return false
    }
}
export const dateFormatFullTime = (date:any, method:any = null) => {
    if (method == null) {
        method = 'MONTH_NAME_TH'
    }

    if (date == null) {
        return ""
    }
    let datex = date.split("T")
    let time = datex[1].split(":")
    console.log(parseFloat((time[2]).replace("Z")).toFixed(2), "dateFormatTime");
    try {
        let newdate = datex[0].split("-")
        let year = newdate[0]
        let m = newdate[1]
        let d = newdate[2]
        let mname = ""
        // console.log(m)
        for (var i in month) {
            if (month[i].MONTH_ID == m) {
                mname = month[i].MONTH_NAME_TH
            }
        }
        return String(parseInt(d)) + " " + mname + " " + (parseInt(year) + 543) + " " + time[0] + ":" + time[1] + ":" + parseInt((time[2]).replace("Z"))
    }
    catch {
        return false
    }
}

export const dateFormatTimeTH = (date: any, method: any = null) => {
    if (method == null) {
        method = 'MONTH_NAME_TH'
    }
    if (date == null) {
        return ""
    }
    try {
        let newdate = date.split("T")
        let year = newdate[0]
        let m = newdate[1]
        let d = newdate[2]
        let ms = newdate[3]
        let mname = ""
        // console.log(m)
        for (var i in month) {
            if (month[i].MONTH_ID == m) {
                mname = month[i].MONTH_NAME_TH
            }
        }
        return String(parseInt(d)) + " " + mname + " " + (parseInt(year) + 543) + " " + ms + " น."
    }
    catch {
        return false
    }
}

// day/month/year th
export const dateFormatTimeTHSlash = (date: any, method: any = null) => {
    if (method == null) {
        method = 'MONTH_NAME_TH'
    }
    if (date == null) {
        return ""
    }
    try {
        let newdate = date.split("/")
        let d = newdate[0]
        let m = newdate[1]
        let year = newdate[2]
        let mname = ""
        // console.log(m)
        for (var i in month) {
            if (month[i].MONTH_ID == m) {
                mname = month[i].MONTH_NAME_TH
            }
        }
        return String(parseInt(d)) + " " + mname + " " + (parseInt(year))
    }
    catch {
        return false
    }
}