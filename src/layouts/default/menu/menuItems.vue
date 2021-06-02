<template>
    <div v-if="router.children && router.children.length > 1">
        <a-sub-menu key="sub1">
            <template #title>
                <span>{{ router.meta.title }} </span>
            </template>
            <template v-for="r of router.children" :key="r.name">
                <a-menu-item @click="handleRouterChange(r.name)">
                    <span>{{ r.meta.title }}</span>
                </a-menu-item>
            </template>
        </a-sub-menu>
    </div>
    <div v-else @click="handleRouterChange(router.name)">
        <a-menu-item>
            <span>{{ router.children[0].meta.title }}</span>
        </a-menu-item>
    </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { Menu } from "ant-design-vue";
import { userFilterRoutes } from "@/hooks/router/userRoutes";
import { useAppStoreModule } from "@/hooks/web/useApp";
import { onMounted } from "vue";
export default {
    name: "MenuItems",
    props: {
        router: Object,
    },
    components: {
        MenuItem: Menu.Item,
        SubMenu: Menu.SubMenu,
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const { setBreadcrumb } = useAppStoreModule();

        //  获取当前路由 转成可以和name匹配的路由名
        const handleRoutePath = (path) => {
            let hash = path.split("/")[1];
            let hashOne = hash.charAt(0);
            return hash.replace(hashOne, hashOne.toLocaleUpperCase());
        };

        //  切换路由 => 跳转 => 更换当前路由信息
        const handleRouterChange = async (name) => {
            await router.push({ name });
            const hash = handleRoutePath(route.path);
            userFilterRoutes(router.options.routes).forEach((r) => {
                if (r.name === hash) {
                    setBreadcrumb(r);
                }
            });
        };

        //  首次加载获取路由
        const getWindowHash = () => {
            const hash = window.location.hash;
            const hashOne = hash.split("/")[1];
            return hashOne.replace(
                hashOne.charAt(0),
                hashOne.charAt(0).toLocaleUpperCase()
            );
        };
        //  首次渲染加载导航
        const getRouteBreadcrumb = () => {
            userFilterRoutes(router.options.routes).forEach((r) => {
                if (r.name === getWindowHash()) {
                    setBreadcrumb(r)
                }
            });
        };
        
        onMounted(() => getRouteBreadcrumb());

        return {
            handleRouterChange,
        };
    },
};
</script>