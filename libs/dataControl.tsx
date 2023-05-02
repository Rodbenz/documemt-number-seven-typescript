const Jwt = require("jsonwebtoken");
const convert = require("xml-js")

export function setCookie(cname:string, cvalue:string, exdays:number) {
    var d = new Date();
    let min = 60 * 24 // 5 minutes
    d.setTime(d.getTime() + (min * 60 * 1000)); // 5 minutes
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname:string) {
    if (process.browser) {
        var name = cname + "=";
        console.log(name);
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}

export function _createToken(data: any) {
    // try {
        var token = Jwt.sign(data, process.env.privateKey);
        return token
    // } catch {
    //     return false
    // }
}

export function _readToken(token: any) {
    if (token == null) {
        return false
    } else {
        try {
        console.log(token, process.env.privateKey)
            var decode = Jwt.verify(token, process.env.privateKey);
            return decode
        } catch (err) {
            console.log(err)
            return false
        }
    }
}

