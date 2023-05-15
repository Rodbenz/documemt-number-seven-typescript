import React from 'react'
import style from '../../../Home.module.css'
import HeaderExport from './@component/headerExport'
import SearchReprtExport from './@component/searchReportExport'
import FoundInformationExport from './@component/foundInformationExport';
import { useCartContext } from '@/context/Cartcontext';
import FoundInformationExportNS3a from './@component/foundInformationExportNS3a';

export default function ReportExport() {
    const { dataExport, dataSandExport } = useCartContext();
    
    return (
        <div>
            <div >
                {/* หัวข้อ */}
                <HeaderExport />
                {/* ค้นหารายการส่งออก */}
                <SearchReprtExport />
                {/* รายการส่งออก */}
                {dataExport.length > 0 && dataSandExport.length > 0 && (
                    dataSandExport[0].PARCELTYPE == 1 &&
                    <FoundInformationExport/>
                )}
                {dataExport.length > 0 && dataSandExport.length > 0 && (
                    dataSandExport[0].PARCELTYPE == 3 &&
                    <FoundInformationExportNS3a/>
                )}
            </div>
        </div>
    )
}
