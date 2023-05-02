import React from 'react'
import style from '@/styles/Home.module.css'
import HeaderExport from '@/pages/components/menu/reportExport/@component/headerExport'
import SearchReprtExport from './@component/searchReportExport'
import { useCartContext } from '@/context/Cartcontext';
import FoundInformationExport from './@component/foundInformationExport';

export default function ReportExport() {
    const { dataSearch } = useCartContext();
    return (
        <div>
            <div className={style.box} style={{ height: 'calc(1024px - 256px)' }}>
                {/* หัวข้อ */}
                <HeaderExport />
                {/* ค้นหารายการส่งออก */}
                <SearchReprtExport />
                {/* รายการส่งออก */}
                {dataSearch.length > 0 && (
                    <FoundInformationExport/>
                )}
            </div>
        </div>
    )
}
