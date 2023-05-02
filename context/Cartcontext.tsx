"use client";

import React, { createContext, useState, useContext, useReducer } from "react";
import { initialState, reducer } from "./userReducer";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [dataSearch, setDataSearch] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogEdit, setOpenDialogEdit] = useState(false);
    
    const [isMenuSummarize, setIsMenuSummarize] = useState({});

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }
    const handleCloseDialogEdit = () => {
        setOpenDialogEdit(false);
    }

    const value = {
        state,
        dispatch,
        dataSearch,
        setDataSearch,
        openDialog,
        setOpenDialog,
        handleCloseDialog,
        openDialogEdit,
        setOpenDialogEdit,
        handleCloseDialogEdit,
        // สรุปรายงาน
        isMenuSummarize,
        setIsMenuSummarize
    };

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>;
}

// export default CartContext

export const useCartContext = () => useContext(CartContext);

