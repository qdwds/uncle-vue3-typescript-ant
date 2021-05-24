import { defineStore } from "pinia";
import { store } from "@/store";

interface AppStore {
    breadcrumb: Object
}

export const useAppStore = defineStore({
    id: "app",
    state: (): AppStore => ({
        breadcrumb: []
    }),
    getters: {
        getBreadcrumb(state) {
            return state.breadcrumb
        }
    },
    actions: {
        setBreadcrumb(breadcrumb: Object): void {
            this.breadcrumb = breadcrumb;
        }
    }
})

export const userAppStoreWidthOut = () => {
    return useAppStore(store)
}