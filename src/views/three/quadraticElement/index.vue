<template>
    <div id="ecy"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    CircleBufferGeometry,
    MeshLambertMaterial,
    Mesh,
    Clock,
    AmbientLight,
    SpotLight,
    AudioLoader,
    AudioListener,
    Audio,
} from "three";
import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader";
import { MMDAnimationHelper } from "three/examples/jsm/animation/MMDAnimationHelper";
import { useStatsJs } from "@/hooks/web/useStats";
import { useWinStoreModule } from "@/hooks/web/useWin";
export default defineComponent({
    setup() {
        const RCY_PATH: string = "/three/quadraticElement/";
        let ready: boolean = false;
        let stop: number | null = null;
        const { stats } = useStatsJs();
        const { getWindowSize } = useWinStoreModule();
        let width: number = getWindowSize.value.width;
        let height: number = getWindowSize.value.height;

        //  场景
        const scene: Scene = new Scene();
        //  相机
        const camera = new PerspectiveCamera(
            45,
            width / window.innerHeight,
            0.1,
            10000
        );
        camera.position.z = 100;

        const renderer: WebGLRenderer = new WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(0x00000);
        renderer.shadowMap.enabled = true; //  投影

        const clock: Clock = new Clock();

        //  平板
        const circle = new Mesh(
            new CircleBufferGeometry(50, 50),
            new MeshLambertMaterial({
                color: 0xaaaaaa,
                side: 2,
            })
        );
        circle.receiveShadow = true;
        circle.rotation.x = -0.5 * Math.PI;
        scene.add(circle);

        //  环境光
        scene.add(new AmbientLight(0x666666, 1));
        let point = new SpotLight(0x666666, 1, 1000);
        point.position.set(12, 22, 2);
        point.castShadow = true; //  投影
        scene.add(point);

        let audio: Audio | null = null;
        let helper: MMDAnimationHelper | any = null;

        function loader() {
            helper = new MMDAnimationHelper({
                afterglow: 2.0,
            });
            let mmd = new MMDLoader();

            //  调用模型
            mmd.loadWithAnimation(
                `${RCY_PATH}miku_v2.pmd`,
                [`${RCY_PATH}wavefile_v2.vmd`],
                (m) => {
                    let mesh = m.mesh;
                    mesh.castShadow = true; //  模型投影
                    helper.add(m.mesh, {
                        animation: m.animation,
                        physics: false,
                    });
                    //  调用相机
                    mmd.loadAnimation(
                        `${RCY_PATH}wavefile_camera.vmd`,
                        camera,
                        (cam) => {
                            helper.add(camera, {
                                animation: cam,
                            });
                            audioPlay(mesh);
                        }
                    );
                },
                down
            );
        }

        //  mp3音效
        function audioPlay(mesh: any) {
            const listener: any = new AudioListener();
            camera.add(listener);
            //  加载声音并将其设置为Audio对象的缓冲区
            const audioLoader = new AudioLoader();
            audioLoader.load(
                `${RCY_PATH}wavefile_short.mp3`,
                function (buffer) {
                    audio = new Audio(listener).setBuffer(buffer);
                    helper.add(audio, { delayTime: (160 * 1) / 30 });
                    scene.add(mesh);
                    ready = true;
                }
            );
        }

        //  下载进度
        function down(xhr: ProgressEvent) {
            if (xhr?.lengthComputable) {
                const p = (xhr.loaded / xhr.total) * 100;
                console.log(`download ${Math.round(p)}%`);
            }
        }

        function render() {
            stop = requestAnimationFrame(render);
            if (ready) {
                helper.update(clock.getDelta());
            }
            renderer.render(scene, camera);
            stats.update();
        }

        //  窗口 改变
        window.addEventListener("resize", () => onWindowResize());
        const onWindowResize = () => {
            if (getWindowSize.value?.height && getWindowSize.value?.width) {
                renderer.setSize(width, height);
                camera.aspect = width / height; //  处理 浏览器缩放
            }
            camera.updateProjectionMatrix(); //  更新窗口
        };

        onMounted(() => {
            const ecy: HTMLElement | null = document.getElementById("ecy");
            if (ecy) {
                stats.showPanel(0);
                ecy.appendChild(stats.dom);
                stats.dom.style.position = "absolute";
                ecy.appendChild(renderer.domElement);
            }
            loader();
            render();
        });

        onUnmounted(() => {
            if (stop) {
                cancelAnimationFrame(stop);
            }
            if(audio?.isPlaying){
                audio?.stop() 
            }
        });

        return {};
    },
});
</script>