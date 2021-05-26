import { defineStore } from "pinia";
import { store } from "@/store";

interface OWinStore {
    pageDom: OPageDom
}

export interface OPageDom {
    width: number,
    height: number
}

export const useWinStore = defineStore({
    id: "win",
    state: (): OWinStore => ({
        //  窗口大小
        pageDom: {
            width: 0,
            height: 0
        }
    }),
    getters: {
        getPageDom(state: OWinStore): OPageDom {
            return state.pageDom
        }
    },
    actions: {
        setPageDom(page: OPageDom): void {
            this.pageDom = page
        }
    }
})


export const useWinStoreWidthOut = () =>{
    return useWinStore(store)
}