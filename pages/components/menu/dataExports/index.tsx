import { useCartContext } from '@/context/Cartcontext'
import React from 'react'
import DepartmentLands from './@component/departmentLands'
import { REPORT_RECEIVE } from '@/service/report'
import MenuDataExport from './@component/menuDataExport'

export default function DataExPort() {
    const { isMenuDataExport} = useCartContext();
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
        if(Object.keys(isMenuDataExport).length > 0){
            console.log(isMenuDataExport,'isMenuSeq');
            _selMenu(isMenuDataExport)
        }
        if(Object.keys(isMenuDataExport).length > 0){
           let head1:any = [{name: 'รายการรับข้อมูล จาก กรมที่ดิน',width: 100,}]
           let head2:any = [{name: 'รายการรับข้อมูล จาก กรมส่งเสริมการปกครองท้องถิ่น',width: 100,}]
           setHendname([])
           isMenuDataExport.id === 1 && setHendname(head1)
           isMenuDataExport.id === 2 && setHendname(head2)   
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
