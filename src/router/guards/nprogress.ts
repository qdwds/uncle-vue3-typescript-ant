import type { Router } from "vue-router";
import { start, done } from "nprogress";
import 'nprogress/nprogress.css';


export const createNprogress = (router: Router): void => {
    router.beforeEach(_ => {
        start()
    })
    router.afterEach(_ => {
        done();
    })
    
}