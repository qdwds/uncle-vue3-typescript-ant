import * as Stats from "stats.js";

//  stats.js 性能监控

export const useStatsJs = ()=>{
    const stats:Stats = new Stats();
    return {
        stats
    }
}