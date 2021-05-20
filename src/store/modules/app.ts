import { defineStore } from "pinia";
import { store } from "@/store";

interface AppStore {
    count: number
}

export const useAppStore = defineStore({
    id: "app",
    state: (): AppStore => ({
        count: 1
    }),
    getters:{
        getCount:state=>state.count,
        g(state){
            return state.count;
        }
    },
    actions: {
        setCount(count: number): void{
            this.count = count;
        },
    }
})

export const userAppStoreWidthOut = () =>{
    return useAppStore(store)
}