import Backdrop from '@mui/material/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import * as LoadingScreenStore  from '../../../../store/feature/loadingscreen';
var disPacth:any;
var state:any;
export default function LoadingScreen() {
    disPacth = useDispatch()
    state = useSelector((state:any) => state.loadingScreen.value)
    const que = useSelector((state:any) => state.loadingScreen.value)

    return (
        <Backdrop
            sx={{ zIndex: 1000000 }}
            open={que > 0}
        >
            <CircularProgress />
        </Backdrop>
    )
}


export function AddLoading() {
    // console.log("add loading")
    disPacth(LoadingScreenStore.addQue())
}
export function RemoveLoading() {
    disPacth(LoadingScreenStore.removeQue())
}
