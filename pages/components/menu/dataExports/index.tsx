import { useCartContext } from '@/context/Cartcontext'
import React from 'react'
import DepartmentLands from './@component/departmentLands'
import { REPORT_RECEIVE, REPORT_SEND } from '@/service/report'
import MenuDataExport from './menuDataExport'
import { haedlistMenuExport, haedlistMenuExport2, haedlistMenuExport3, haedlistMenuExport4, haedlistMenuExport5, haedlistMenuExport6, haedlistMenuExport7, haedlistMenuExport8, haedlistMenuExport9 } from '@/libs/headName'

export default function DataExPort() {
    const { isMenuDataExport} = useCartContext();
    const [dataList, setDataList] = React.useState<any>([])
    const [hendname, setHendname] = React.useState<any>([])

    const _selMenu = async (el: any) => {
        try{
            let res = await REPORT_SEND(el.id == 1 ? '': el.id)
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
            if(isMenuDataExport.id === 2){
                setHendname(haedlistMenuExport2)
            }
            if(isMenuDataExport.id === 3){
                setHendname(haedlistMenuExport3)
            }
            if(isMenuDataExport.id === 4){
                setHendname(haedlistMenuExport4)
            }
            if(isMenuDataExport.id === 5){
                setHendname(haedlistMenuExport5)
            }
            if(isMenuDataExport.id === 6){
                setHendname(haedlistMenuExport6)
            }
            if(isMenuDataExport.id === 7){
                setHendname(haedlistMenuExport7)
            }
            if(isMenuDataExport.id === 8){
                setHendname(haedlistMenuExport8)
            }
            if(isMenuDataExport.id === 9){
                setHendname(haedlistMenuExport9)
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
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 3 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 4 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 5 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 6 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 7 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 8 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
            {Object.keys(isMenuDataExport).length > 0  && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuDataExport.id === 9 &&
                <DepartmentLands hendname={hendname} dataList={dataList}/>
            )}
        </div>
    )
}
