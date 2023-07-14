import { useCartContext } from '@/context/Cartcontext'
import React from 'react'
import MenuReceiving from './menuReceiving'
import DepartmentLands from './@componentLands/departmentLands'
import ReportReceiving from './@componentLands/reportReceiving'
import { REPORT_RECEIVE } from '@/service/report'
import { headNameReceiving1, headNameReceiving10, headNameReceiving11, headNameReceiving12, headNameReceiving2, headNameReceiving3, headNameReceiving4, headNameReceiving5, headNameReceiving6, headNameReceiving7, headNameReceiving8, headNameReceiving9 } from '@/libs/headName'
import DepartmentPromotion from './@componentPromotion/departmentPromotion'
import DepartmentAgiculture from './@conmponentAgiculture/departmentAgiculture'
import DepartmentRoads from './@conmponentRoads/departmentRoads'

export default function ReceivingInformation() {
    const { isMenuReceiving } = useCartContext();
    const [dataList, setDataList] = React.useState<any>([])
    const [hendname, setHendname] = React.useState<any>([])

    const _selMenu = async (el: any) => {
        let datasend: any = {
            "GOV_TYPE": String(el.id),
        }
        try {
            let res = await REPORT_RECEIVE(datasend)
            console.log(res, 'res');
            await setDataList(res)
        } catch (err) {

        }
    }
    const _selMenutype = async (el: any) => {
        let datasend: any = {
            "GOV_TYPE": String(el.id),
        }
        try {
            let res = await REPORT_RECEIVE(datasend)
            console.log(res, 'res');
            await setDataList(res)
        } catch (err) {

        }
    }

    const refreshMenu = async () => {
        _selMenu(isMenuReceiving)
    }

    React.useEffect(() => {
        if (Object.keys(isMenuReceiving).length > 0) {
            console.log(isMenuReceiving, 'isMenuSeq');
            if (isMenuReceiving.id == 1 || 2) {
                _selMenu(isMenuReceiving)
            } else {
                _selMenutype(isMenuReceiving)
            }
        }
        if (Object.keys(isMenuReceiving).length > 0) {
            setHendname([])
            if (isMenuReceiving.id === 1) {
                setHendname(headNameReceiving1)
            }
            if (isMenuReceiving.id === 2) {
                setHendname(headNameReceiving2)
            }
            if (isMenuReceiving.id === 3) {
                setHendname(headNameReceiving3)
            }
            if (isMenuReceiving.id === 4) {
                setHendname(headNameReceiving4)
            }
            if (isMenuReceiving.id === 5) {
                setHendname(headNameReceiving5)
            }
            if (isMenuReceiving.id === 6) {
                setHendname(headNameReceiving6)
            }
            if (isMenuReceiving.id === 7) {
                setHendname(headNameReceiving7)
            }
            if (isMenuReceiving.id === 8) {
                setHendname(headNameReceiving8)
            }
            if (isMenuReceiving.id === 9) {
                setHendname(headNameReceiving9)
            }
            if (isMenuReceiving.id === 10) {
                setHendname(headNameReceiving10)
            }
            if (isMenuReceiving.id === 11) {
                setHendname(headNameReceiving11)
            }
            if (isMenuReceiving.id === 12) {
                setHendname(headNameReceiving12)
            }
        }
        if (Object.keys(isMenuReceiving).length === 0) {
            setDataList([])
            setHendname([])
        }
    }, [isMenuReceiving])

    return (
        <div>
            {Object.keys(isMenuReceiving).length === 0 && <MenuReceiving />}
            {Object.keys(isMenuReceiving).length > 0 && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 1 &&
                <DepartmentLands hendname={hendname} dataList={dataList} refreshMenu={refreshMenu} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 2 &&
                <DepartmentPromotion hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 3 &&
                <DepartmentRoads hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 4 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 5 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 6 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 7 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 8 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 9 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 10 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 11 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
            {Object.keys(isMenuReceiving).length > 0 && (
                // Array.isArray(dataList) && dataList.length > 0 &&
                isMenuReceiving.id === 12 &&
                <DepartmentAgiculture hendname={hendname} dataList={dataList} />
            )}
        </div>
    )
}
