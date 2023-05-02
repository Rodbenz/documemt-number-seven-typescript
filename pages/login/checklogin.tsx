import React from 'react';
import { useRouter } from 'next/router'
import { getCookie, setCookie, _createToken, _readToken } from '@/libs/dataControl';
import { useCartContext } from '@/context/Cartcontext';
import { useSelector } from 'react-redux'

interface ICheckLogin {
    skiproute?: string[]
}
export default function CheckLogin(props: ICheckLogin) {
    const userid = useSelector((state:any) => state.userid.value);
    const [isCheckedService, setIsCheckedService] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        _checkValidUser()
    },[])

    const _checkValidUser = async () => {
        console.log("checkValidUser", userid)
        if (userid == 0) {
            // router.push('/login')
            _checkSession()
            // await _check_eService()
        }
    }

    const _checkSession = async () => {
        console.log("check Session")

        let localUserData = getCookie("userdata")
        console.log(localUserData,'localUserData');
        let userData = _readToken(localUserData)
        console.log(userData,'userDatauserDatauserDatauserData');
        if (userData == false) {
            console.log(window.location.pathname)
            if (window.location.pathname !== '/login') {
                // if (!props.skiproute.includes(router.route)) 
                { window.location.href = '/login' }

            }
        }

    }


    return (
        <span></span>
    )
}