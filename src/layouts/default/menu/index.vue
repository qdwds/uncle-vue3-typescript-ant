<template>
    <LayoutSider v-model:collapsed="collapsed" collapsible>
        <Logo></Logo>
        <Menu
            theme="dark"
            mode="inline"
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
        >
            <template v-for="router in routes" :key="router.name">
                <MenuItems :router="router"></MenuItems>
            </template>
        </Menu>
    </LayoutSider>
</template>
 
<script lang="ts">
import Logo from "../logo/index.vue";
import MenuItems from "./menuItems.vue";
import { defineComponent, reactive, ref, toRefs } from "vue";
import { Menu, Layout } from "ant-design-vue";
import { useRoute,useRouter } from "vue-router";
import { userFilterRoutes } from "@/hooks/router/userRoutes";
export default defineComponent({
    components: {
        Logo,
        Menu,
        MenuItems,
        LayoutSider: Layout.Sider,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const routes = userFilterRoutes(router.options.routes)
      console.log(routes);
      
        //  路由排序
        const routesSort = (meta: string, orderNo: string) => {
            return function (a: any, b: any) {
                let max = a[meta][orderNo];
                let min = b[meta][orderNo];
                return max - min;
            };
        };
        routes.sort(routesSort("meta", "orderNo"));


        let collapsed = ref<Boolean>(false);
        const getOpenKeys = () => [route.matched[0]?.name];

        const state = reactive({
            openKeys: getOpenKeys(),
            selectedKeys: [route.name],
        });

        return {
            ...toRefs(state),
            routes,
            collapsed,
        };
    },
});
</script>

<style scoped>
</style>