// const Jwt = require('jsonwebtoken')
// const convert = require("xml-js")

// export function setCookie(cname:string, cvalue:string, exdays:number) {
//     var d = new Date();
//     let min = 60 * 24 // 5 minutes
//     d.setTime(d.getTime() + (min * 60 * 1000)); // 5 minutes
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// export function getCookie(cname:string) {
//     if (process) {
//         var name = cname + "=";
//         console.log(name);
//         var decodedCookie = decodeURIComponent(document.cookie);
//         var ca = decodedCookie.split(';');
//         for (var i = 0; i < ca.length; i++) {
//             var c = ca[i];
//             while (c.charAt(0) == ' ') {
//                 c = c.substring(1);
//             }
//             if (c.indexOf(name) == 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }
//         return "";
//     }
// }

// export function _createToken(data: any) {
//     // try {
//         var token = Jwt.sign(data, 'imyourfather!!!');
//         return token
//     // } catch {
//     //     return false
//     // }
// }

// export function _readToken(token: any) {
//     if (token == null) {
//         return false
//     } else {
//         try {
//         console.log(token, process.env.privateKey)
//             var decode = Jwt.verify(token, 'imyourfather!!!');
//             return decode
//         } catch (err) {
//             console.log(err)
//             return falseF
//         }
//     }
// }

export function right(str: any, chr: any) {
    try {
        let strr = str.toString()
        return strr.slice(strr.length - chr, strr.length);
    } catch {
        return null
    }

}

export function SplitData(data:any) {
    try {
        let dataSplit = data.split('.')
        console.log(dataSplit, 'dataSplit');
        return dataSplit[0]
    } catch {
        return '-'
    }
}
export function SplitDataType(data:any) { 
    try {
        let dataSplit = data.split('.')
        return dataSplit.pop()
    } catch {
        return '-'
    }
}
export function SplitDataTypeFile(data:any) { 
    let newData = []
    try {
        let dataSplit = data.split('.')
        for(let i = 0; i < dataSplit.length; i++) {
            let data = (dataSplit[i]).split(',')[0]
            data != '' && newData.push(data)
        }
        return newData
    } catch {
        return []
    }
}

export function CheckFormate(data: any) {
    try {
        const dataObject = data[0]
        const keysArray = Object.keys(dataObject);
        let status: boolean = false;
        keysArray.forEach((key) => {
            console.log(`${key}`);
            if(key == 'PROVINCECODE'){
                status = true
            }
            if(key == 'CHANGWAT_CODE'){
                status = true
            }
            if(key == 'PROVINCE_C'){
                status = true
            }
          });
        return status;
    } catch {
        return false;
    }
}