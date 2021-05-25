<template>
    <div class="header_icon user">
        <a-dropdown>
            <div>
                <a-avatar size="small">
                    <template #icon><UserOutlined /> </template>
                </a-avatar>
                <span class="user_name">admin</span>
            </div>
            <template #overlay>
                <a-menu>
                    <a-menu-item
                        :key="menu.id"
                        v-for="menu in icon_menu"
                        @click="iconMenuClick(menu.id)"
                    >
                        {{ menu.name }}
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { OIconMenu } from "./types";
export default defineComponent({
    components: {
        UserOutlined,
    },
    setup() {
        const router = useRouter();
        const icon_menu = ref<OIconMenu[]>([
            { id: 1, name: "锁定屏幕" },
            { id: 2, name: "退出登录" },
        ]);

        //  锁屏事件
        const lockScreen = () => {
            console.log("锁屏");
        };

        const iconMenuClick = (id: number): void => {
            switch (id) {
                case 1:
                    lockScreen();
                    break;
                case 2:
                    router.push({ path: "/" });
                    localStorage.clear();
                    sessionStorage.clear();
                    break;
            }
        };
        return {
            icon_menu,
            iconMenuClick,
        };
    },
});
</script>

<style lang="less" scoped>
@import url("@/styles/header.less");
.user {
    width: 95px !important;
    .user_name {
        margin-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>