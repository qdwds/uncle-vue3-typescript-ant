import { defineStore } from "pinia";
import { store } from "@/store";

interface AppStore {
    breadcrumb: Object,
    unlocking: Boolean
}

export const useAppStore = defineStore({
    id: "app",
    state: (): AppStore => ({
        breadcrumb: [],     //  面包屑
        unlocking: false,    //  锁屏
    }),
    getters: {
        getBreadcrumb(state) {
            return state.breadcrumb
        },
        getUnlocking(state) {
            return state.unlocking
        }
    },
    actions: {
        setBreadcrumb(breadcrumb: Object): void {
            this.breadcrumb = breadcrumb;
        },
        setUnlocking(unlocking: Boolean) {
            console.log(unlocking, "unlocking", unlocking);

            this.unlocking = unlocking;
        }
    }
})

export const userAppStoreWidthOut = () => {
    return useAppStore(store)
}