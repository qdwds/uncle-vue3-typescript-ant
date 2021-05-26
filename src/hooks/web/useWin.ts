import { useWinStore ,OPageDom} from "@/store/modules/win";
import { computed } from "vue";


export const useWinStoreModule = ()=>{
    const winStoreModule = useWinStore();

    //  content窗口大小
    const getPageDom = computed(()=>winStoreModule.getPageDom);
    
    const setPageDom = (page:OPageDom):void =>{
        winStoreModule.setPageDom(page);
    }
    return {
        getPageDom,
        setPageDom
    }
}