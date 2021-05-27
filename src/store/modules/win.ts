import { defineStore } from "pinia";
import { store } from "@/store";

interface OWinStore {
    windowSize: OWindowSize
}

export interface OWindowSize {
    width: number,
    height: number
}

export const useWinStore = defineStore({
    id: "win",
    state: (): OWinStore => ({
        //  窗口大小
        windowSize: {
            width: 0,
            height: 0
        }
    }),
    getters: {
        getWindowSize(state: OWinStore): OWindowSize {
            return state.windowSize
        }
    },
    actions: {
        setWindowSize(page: OWindowSize): void {
            this.windowSize = page
        }
    }
})


export const useWinStoreWidthOut = () =>{
    return useWinStore(store)
}