import { useCartContext } from '@/context/Cartcontext'
import React from 'react'
import MenuReceiving from './@component/menuReceiving'
import DepartmentLands from './@component/departmentLands'
import ReportReceiving from './@component/reportReceiving'
import { REPORT_RECEIVE } from '@/service/report'
import { headNameReceiving1, headNameReceiving2 } from '@/libs/headName'

export default function ReceivingInformation() {
    const { isMenuReceiving} = useCartContext();
    const [dataList, setDataList] = React.useState<any>([])
    const [hendname, setHendname] = React.useState<any>([])

    const _selMenu = async (el: any) => {
        let datasend:any ={
            "GOV_TYPE" :  String(el.id),
        }
        try{
            let res = await REPORT_RECEIVE(datasend)
            console.log(res,'res');
            await setDataList(res)
        }catch(err){

        }
    }

    React.useEffect(() => {
        if(Object.keys(isMenuReceiving).length > 0){
            console.log(isMenuReceiving,'isMenuSeq');
            _selMenu(isMenuReceiving)
        }
        if(Object.keys(isMenuReceiving).length > 0){
           setHendname([])
            if(isMenuReceiving.id === 1){
                setHendname(headNameReceiving1)
            }
            if(isMenuReceiving.id === 2){
                setHendname(headNameReceiving2)
            }
        }
        if(Object.keys(isMenuReceiving).length === 0){
            setDataList([])
            setHendname([])
        }
    }, [ isMenuReceiving])

    return (
        <div>
            {Object.keys(isMenuReceiving).length === 0 && <MenuReceiving />}
            {Object.keys(isMenuReceiving).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 1 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
            {Object.keys(isMenuReceiving).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 2 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
        </div>
    )
}
