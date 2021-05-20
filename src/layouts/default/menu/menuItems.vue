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
import { useRouter } from "vue-router";
import { Menu } from "ant-design-vue";
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

        const handleRouterChange = (name) => {
            router.push({ name });
        };
        return {
            handleRouterChange,
        };
    },
};
</script>