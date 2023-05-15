import React from 'react'
import style from '../../../Home.module.css'
import HeaderSummarrize from './@component/headerSummarize'
import MenuSummarize from './@component/menuSummarize'
import LandApartment from './@component/RegistrationInformation/LandApartment'
import FoundInformationRegistrationInformation from './@component/RegistrationInformation/foundInformationRegistrationInformation'
import RegisteredTradingInformation from './@component/RegisteredTrading/RegisteredTradingInformation'
import PlotInformation from './@component/PlotInformation'
import FoundInformationPlotInformation from './@component/PlotInformation/foundInformationPlotInformation'
import FoundInformationRegisteredTrading from './@component/RegisteredTrading/foundInformationRegisteredTrading'
import { useCartContext } from '@/context/Cartcontext'
import LanBuildingTax from './@component/LanBuildingTax'
import FoundInformationLanBuilding from './@component/LanBuildingTax/foundInformationLanBuilding'


export default function ReportSummarize() {
  const { isMenuSummarize, dataInformationList, dataLandApartmentList, dataRegisteredTradingInformationList, dataLanBuildingList } = useCartContext();

  return (
    <div >
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
      {Object.keys(isMenuSummarize).length > 0 && dataInformationList.length > 0 && (
        isMenuSummarize.id == 1 &&
        <FoundInformationPlotInformation />
      )}
      {/* ค้นหา 2 */}
      {Object.keys(isMenuSummarize).length > 0 && (
        isMenuSummarize.id == 2 &&
        <LandApartment />
      )}
      {/* รายงานค้นหา 2*/}
      {Object.keys(isMenuSummarize).length > 0 && dataLandApartmentList.length > 0 && (
        isMenuSummarize.id == 2 &&
        <FoundInformationRegistrationInformation />
      )}
      {/* ค้นหา 3 */}
      {Object.keys(isMenuSummarize).length > 0 && (
        isMenuSummarize.id == 3 &&
        <RegisteredTradingInformation />
      )}
      {/* รายงานค้นหา 3*/}
      {Object.keys(isMenuSummarize).length > 0 && dataRegisteredTradingInformationList.length > 0 && (
        isMenuSummarize.id == 3 &&
        <FoundInformationRegisteredTrading />
      )}
      {/* ค้นหา 4 */}
      {Object.keys(isMenuSummarize).length > 0 && (
        isMenuSummarize.id == 4 &&
        <LanBuildingTax />
      )}
      {/* รายงานค้นหา 3*/}
      {Object.keys(isMenuSummarize).length > 0 && dataLanBuildingList.length > 0 && (
        isMenuSummarize.id == 4 &&
        <FoundInformationLanBuilding dataSearch={dataLanBuildingList}/>
      )}
    </div>
  )
}
