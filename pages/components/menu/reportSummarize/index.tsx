import React from 'react'
import style from '../../../../styles/Home.module.css'
import HeaderSummarrize from './@component/headerSummarize'
import MenuSummarize from './@component/menuSummarize'
import { useCartContext } from '@/context/Cartcontext'
import LandApartment from './@component/RegistrationInformation/LandApartment'
import FoundInformationRegistrationInformation from './@component/RegistrationInformation/foundInformationRegistrationInformation'
import RegisteredTradingInformation from './@component/RegisteredTrading/RegisteredTradingInformation'
import PlotInformation from './@component/PlotInformation'
import FoundInformationPlotInformation from './@component/PlotInformation/foundInformationPlotInformation'
import FoundInformationRegisteredTrading from './@component/RegisteredTrading/foundInformationRegisteredTrading'


export default function ReportSummarize() {
  const { dataSearch, isMenuSummarize, setIsMenuSummarize } = useCartContext();
  return (
    <div className={style.box} style={{ height: 'calc(1024px - 256px)' }}>
      {/* หัวข้อ */}
      <HeaderSummarrize />
      {/* เมนู */}
      {Object.keys(isMenuSummarize).length == 0 && <MenuSummarize />}
      {/* ค้นหา 1 */}
      {Object.keys(isMenuSummarize).length > 0 && (
        isMenuSummarize.id == 1 &&
        <PlotInformation />
      )}
      {/* รายงานค้นหา 1*/}
      {Object.keys(isMenuSummarize).length > 0 && dataSearch.length > 0 && (
        isMenuSummarize.id == 1 &&
        <FoundInformationPlotInformation />
      )}
      {/* ค้นหา 2 */}
      {Object.keys(isMenuSummarize).length > 0 && (
        isMenuSummarize.id == 2 &&
        <LandApartment />
      )}
      {/* รายงานค้นหา 2*/}
      {Object.keys(isMenuSummarize).length > 0 && dataSearch.length > 0 && (
        isMenuSummarize.id == 2 &&
        <FoundInformationRegistrationInformation />
      )}
      {/* ค้นหา 3 */}
      {Object.keys(isMenuSummarize).length > 0 && (
        isMenuSummarize.id == 3 &&
        <RegisteredTradingInformation />
      )}
      {/* รายงานค้นหา 3*/}
      {Object.keys(isMenuSummarize).length > 0 && dataSearch.length > 0 && (
        isMenuSummarize.id == 3 &&
        <FoundInformationRegisteredTrading />
      )}
    </div>
  )
}
