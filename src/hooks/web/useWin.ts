import { useWinStore ,OWindowSize} from "@/store/modules/win";
import { computed } from "vue";


export const useWinStoreModule = ()=>{
    const winStoreModule = useWinStore();

    //  content窗口大小
    const getWindowSize = computed(()=>winStoreModule.getWindowSize);
    
    const setWindowSize = (size:OWindowSize):void =>{
        winStoreModule.setWindowSize(size);
    }
    return {
        getWindowSize,
        setWindowSize
    }
}