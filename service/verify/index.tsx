import axios from "axios";

export const verify_token_wjt = async (token: any, callback: any) => {
    let url = `${process.env.REACT_APP_HOST_VERIFYTOKEN}/jwt/verify_token`;
    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify(token);

    let reqOptions = {
        url: url,
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }
    try {
        let response = await axios.request(reqOptions);
        callback(response.data)
    } catch (e) {
        callback(false);
    }
}