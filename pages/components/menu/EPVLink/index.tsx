import React from 'react'
import style from '../../../Home.module.css'
import HeaderExport from './@component/headerExport'
import { useCartContext } from '@/context/Cartcontext';
import SearchEPV from './@component/search';
import FoundInformationEPV from './@component/foundInformationEPV';
import FoundInformationEPVNS3K from './@component/foundInformationEPVNS3K';

export default function ReportExport() {
    const { datalistEpv, datalicense } = useCartContext();

    return (
        <div>
            <div >
                {/* หัวข้อ */}
                <HeaderExport />
                {/* ค้นหารายการส่งออก */}
                <SearchEPV />
                {
                    datalistEpv.length > 0 && datalicense && (
                        datalicense.ID == 1 &&
                        <FoundInformationEPV dataSearch={datalistEpv}/>
                    )
                }
                {
                    datalistEpv.length > 0 && datalicense && (
                        datalicense.ID == 3 &&
                        <FoundInformationEPVNS3K dataSearch={datalistEpv}/>
                    )
                }
            </div>
        </div>
    )
}
