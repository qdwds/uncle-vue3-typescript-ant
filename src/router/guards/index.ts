import router from "../index";
import { createNprogress } from "./nprogress";


export const setupRouterGuard = ():void=>{
    createNprogress(router)
}