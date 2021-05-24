<template>
    <a-breadcrumb :routes="[getBreadcrumb]" separator="/">
        <template #itemRender="{ route, routes, paths }">
            <span v-if="routes.indexOf(route) === routes.length - 1">
                {{ route.name }}
            </span>
            <router-link v-else :to="`${route.name}`">
                {{ route.name }}
            </router-link>
        </template>
         <br />
    {{ path}}
    </a-breadcrumb>

</template>
<script lang="ts">
import { defineComponent ,ref} from "vue";
import { useAppStoreModule } from "@/hooks/web/useApp";
import { useRoute } from "vue-router";
export default defineComponent({
    setup() {
        const {getBreadcrumb} = useAppStoreModule();
        const route = useRoute();
        const path = ref(route.path);
        return {
            getBreadcrumb,
            path
        };
    },
});
</script>