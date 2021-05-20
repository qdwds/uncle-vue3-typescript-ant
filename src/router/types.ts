import type { RouteRecordRaw } from "vue-router";

import { defineComponent } from "vue";

//  component type
export type Component<T extends any = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);

//  meta type
export interface RouteMeta {
    // title
    title?: string;

    // icon on tab
    icon?: string;

    //  排序
    orderNo?: number

}
// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
    name: string,
    path: string,
    redirect?: string,
    component?: Component | string;
    children?: AppRouteRecordRaw[]
    meta?: RouteMeta,
}


export type AppRouteModule = AppRouteRecordRaw;