import { useAppStore } from "@/store/modules/app";
import { computed } from "@vue/runtime-core";
import { AppRouteRecordRaw } from "@/router/types";


export const useAppStoreModule = () => {
    const appStoreModule = useAppStore();


    const getBreadcrumb = computed(() => appStoreModule.breadcrumb);

    const setBreadcrumb = (router: AppRouteRecordRaw[]) => {
        appStoreModule.setBreadcrumb(router)
    }

    return {
        getBreadcrumb,
        setBreadcrumb
    }
}

