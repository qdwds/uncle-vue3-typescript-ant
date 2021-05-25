import { useAppStore } from "@/store/modules/app";
import { computed } from "@vue/runtime-core";
import { AppRouteRecordRaw } from "@/router/types";


export const useAppStoreModule = () => {
    const appStoreModule = useAppStore();

    //  面包屑
    const getBreadcrumb = computed(() => appStoreModule.breadcrumb);
    const setBreadcrumb = (router: AppRouteRecordRaw[]): void => {
        appStoreModule.setBreadcrumb(router)
    }
    
    //  锁屏
    const getUnlocking = computed(() => appStoreModule.unlocking);
    const setUnlocking = (unlocking: Boolean): void => {
        appStoreModule.setUnlocking(unlocking)
    }

    return {
        getBreadcrumb,
        setBreadcrumb,
        getUnlocking,
        setUnlocking,
    }
}

