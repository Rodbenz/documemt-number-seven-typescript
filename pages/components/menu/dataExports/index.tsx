import { useCartContext } from '@/context/Cartcontext'
import React from 'react'
import DepartmentLands from './@component/departmentLands'
import { REPORT_RECEIVE, REPORT_SEND } from '@/service/report'
import MenuDataExport from './@component/menuDataExport'
import { haedlistMenuExport } from '@/libs/headName'

export default function DataExPort() {
    const { isMenuDataExport} = useCartContext();
    const [dataList, setDataList] = React.useState<any>([])
    const [hendname, setHendname] = React.useState<any>([])

    const _selMenu = async (el: any) => {
        try{
            let res = await REPORT_SEND()
            console.log(res,'res');
            await setDataList(res)
        }catch(err){

        }
    }

    React.useEffect(() => {
        if(Object.keys(isMenuDataExport).length > 0){
            console.log(isMenuDataExport,'isMenuSeq');
            _selMenu(isMenuDataExport)
        }
        if(Object.keys(isMenuDataExport).length > 0){
           setHendname([])
            if(isMenuDataExport.id === 1){
                setHendname(haedlistMenuExport)
            }
        }
        if(Object.keys(isMenuDataExport).length === 0){
            setDataList([])
            setHendname([])
        }
    }, [ isMenuDataExport])

    return (
        <div>
            {Object.keys(isMenuDataExport).length === 0 && <MenuDataExport />}
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 1 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 2 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
        </div>
    )
}
