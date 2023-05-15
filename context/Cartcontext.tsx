"use client";

import React, { createContext, useState, useContext, useReducer } from "react";
import { initialState, reducer } from "./userReducer";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [dataSearch, setDataSearch] = useState<any[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [dataEdit, setDataEdit] = useState<any[]>([]);
    const [datasandSrarch, setDatasandSrarch] = useState<any[]>([]);
    // สรุปรายงาน
    const [isMenuSummarize, setIsMenuSummarize] = useState({});
    const [dataInformationList, setDataInformationList] = useState<any[]>([]);
    const [dataLandApartmentList, setDataLandApartmentList] = useState<any[]>([]);
    const [dataRegisteredTradingInformationList, setDataRegisteredTradingInformationList] = useState<any[]>([]);
    const [dataLanBuildingList, setDataLanBuildingList] = useState<any[]>([]);
    // รางานส่งออก
    const [dataExport, setDataExport] = useState<any[]>([]);
    const [dataSandExport, setDataSandExport] = useState<any[]>([]);
    // trd link epv
    const [dataLandList, setDataLandList] = useState<any>(null);
    const [datalistEpv, setDatalistEpv] = useState<any[]>([]);
    const [datalicense, setDataLicense] = useState<any>(null);

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const handleCloseDialogEdit = () => {
        setDataEdit([]);
    }

    React.useEffect(() => {console.log((dataEdit),'openDialogEdit');
    }, [dataEdit])

    const value = {
        state,
        dispatch,
        dataSearch,
        setDataSearch,
        openDialog,
        setOpenDialog,
        handleCloseDialog,
        dataEdit,
        setDataEdit,
        handleCloseDialogEdit,
        datasandSrarch,
        setDatasandSrarch,
        // สรุปรายงาน
        isMenuSummarize,
        setIsMenuSummarize,
        dataInformationList,
        setDataInformationList,
        dataLandApartmentList,
        setDataLandApartmentList,
        dataRegisteredTradingInformationList,
        setDataRegisteredTradingInformationList,
        dataLanBuildingList,
        setDataLanBuildingList,
        // รางานส่งออก
        dataExport,
        setDataExport,
        dataSandExport,
        setDataSandExport,
        // trd link epv
        dataLandList,
        setDataLandList,
        datalistEpv,
        setDatalistEpv,
        datalicense,
        setDataLicense
    };

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>;
}

// export default CartContext

export const useCartContext = () => useContext(CartContext);

