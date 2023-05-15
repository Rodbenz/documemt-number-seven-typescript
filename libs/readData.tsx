import { setGeometrys } from "./readfilezip";

export function readDataPracelShp(dataPracel: any, req: any, valueDate: any) {
    let newdata: any = []
    for (let i = 0; i < dataPracel.length; i++) {
        let dataItemes = dataPracel[i].properties;
        dataItemes.Geometry = setGeometrys(dataPracel[i].geometry)
        dataItemes.INFO_SEQ = req[0] ? String(req[0].INFO_SEQ) : '';
        dataItemes.SEMI_CODE = req[0] ? String(req[0].SEMI_CODE) : '';
        // dataItemes.CEATE_DATE = valueDate != null ? valueDate : '';
        if (dataItemes.Geometry != null) {
            newdata.push(dataItemes)
        }
    }
    return newdata;
}
export function readDataPracelShpAll(dataPracel: any, req: any, valueDate: any) {
    let newdata: any = []
    for (let i = 0; i < dataPracel.length; i++) {
        let dataItemes = dataPracel[i];
        dataItemes.INFO_SEQ = String(req[0].INFO_SEQ)
        dataItemes.SEMI_CODE = String(req[0].SEMI_CODE)

        dataItemes.PDS_ID = String(dataItemes.PDS_ID)
        dataItemes.LAND_ID = String(dataItemes.LAND_ID)
        dataItemes.ASSET_OWNER_ID = String(dataItemes.ASSET_OWNER_ID)
        dataItemes.ORG_ID = String(dataItemes.ORG_ID)
        dataItemes.UTMMAP2 = String(dataItemes.UTMMAP2)
        dataItemes.UTM_SCALE = String(dataItemes.UTM_SCALE)
        dataItemes.LAND_NO = String(dataItemes.LAND_NO)
        dataItemes.DISTRICT_ID = String(dataItemes.DISTRICT_ID)
        dataItemes.RAI = String(dataItemes.RAI)
        dataItemes.NGAN = String(dataItemes.NGAN)
        dataItemes.LAND_USED_ID = String(dataItemes.LAND_USED_ID)
        dataItemes.BUILDING_ID = String(dataItemes.BUILDING_ID)
        dataItemes.BUILDING_AREA = dataItemes.BUILDING_AREA != '' ? dataItemes.BUILDING_AREA : '0';
        dataItemes.TAX_PAY = dataItemes.TAX_PAY != '' ? dataItemes.TAX_PAY : '0';
        dataItemes.PRICE_PER_WAH = dataItemes.PRICE_PER_WAH != '' ? dataItemes.PRICE_PER_WAH : '0';
        dataItemes.LAND_TOTAL_PRICE = dataItemes.LAND_TOTAL_PRICE != '' ? dataItemes.LAND_TOTAL_PRICE : '0';
        dataItemes.PRICE_PER_METER = dataItemes.PRICE_PER_METER != '' ? dataItemes.PRICE_PER_METER : '0';
        dataItemes.BUILDING_TOTAL_PRICE = dataItemes.BUILDING_TOTAL_PRICE != '' ? dataItemes.BUILDING_TOTAL_PRICE : '0';
        dataItemes.DEPRECIATION = dataItemes.DEPRECIATION != '' ? dataItemes.DEPRECIATION : '0';
        dataItemes.BUILDING_NET_PRICE = dataItemes.BUILDING_NET_PRICE != '' ? dataItemes.BUILDING_NET_PRICE : '0';
        dataItemes.TOTAL_PRICE = dataItemes.TOTAL_PRICE != '' ? dataItemes.TOTAL_PRICE : '0';
        dataItemes.USED_PRICE = dataItemes.USED_PRICE != '' ? dataItemes.USED_PRICE : '0';
        dataItemes.TAX_EXEMPT = dataItemes.TAX_EXEMPT != '' ? dataItemes.TAX_EXEMPT : '0';
        dataItemes.NET_PRICE = dataItemes.NET_PRICE != '' ? dataItemes.NET_PRICE : '0';
        dataItemes.SQUARE_WAH = dataItemes.SQUARE_WAH != '' ? dataItemes.SQUARE_WAH : '0';
        dataItemes.USED_RATE = dataItemes.USED_RATE != '' ? dataItemes.USED_RATE : '0';
        newdata.push(dataItemes)
    }
    return newdata;
}
export function readDataPracelShpEdit(dataPracel: any, dataEdit: any, valueDate: any) {
    let newdata: any = []
    for (let i = 0; i < dataPracel.length; i++) {
        let dataItemes = dataPracel[i].properties;
        dataItemes.Geometry = setGeometrys(dataPracel[i].geometry)
        dataItemes.GOV_TYPE = String(dataEdit[0].GOV_TYPE);
        dataItemes.INFO_SEQ = String(dataEdit[0].INFO_SEQ);
        dataItemes.SEMI_CODE = String(dataEdit[0].SEMI_CODE);
        if (dataItemes.Geometry != null) {
            newdata.push(dataItemes)
        }
    }
    return newdata;
}