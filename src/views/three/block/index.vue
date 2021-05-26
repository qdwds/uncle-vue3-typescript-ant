<template>
    <div id="block"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import {
    Scene,
    Renderer,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    TextureLoader,
    DoubleSide,
    Mesh,
    Object3D,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useWinStoreModule } from "@/hooks/web/useWin";

export default defineComponent({
    setup() {
        const IMG_PATH = "/public/skybox";
        let stop: any = null;
        const { getPageDom }= useWinStoreModule();
        // const setNumber = (obj:any):Object =>{
        //     const num:any = {}
        //     for (const k in obj.value) {
        //         if(typeof obj.value[k] === "string" && obj.value[k].includes("px")){
        //                 num[k] = Number(obj.value[k].slice(0,-2))
        //         }
        //     }
        //     console.log(num);
            
        // }
        // setNumber(getPageDom)
        console.log(getPageDom.value);
        
        //  舞台
        const scene: Scene = new Scene();
        //  相机
        const camera: PerspectiveCamera = new PerspectiveCamera(
            45,
            getPageDom.value.width / getPageDom.value.height,
            0.1,
            1000
        );
        camera.position.z = 50;
        const renderer: Renderer = new WebGLRenderer({ antialias: true });
        renderer.setSize(getPageDom.value.width, getPageDom.value.height);

        //  操作
        const orbitControls: OrbitControls = new OrbitControls(
            camera,
            renderer.domElement
        );
        orbitControls.maxDistance = 250; //  往外移出范围

        //  箱子材质
        const textureLoader: TextureLoader = new TextureLoader();
        const boxTextureLoader = textureLoader.load(`${IMG_PATH}/box.jpeg`);

        //  创建箱子
        const boxGeometry: BoxGeometry = new BoxGeometry(10, 10, 10);
        const meshBasiMeterial = new MeshBasicMaterial({
            map: boxTextureLoader,
            side: DoubleSide,
        });
        const mesh: Mesh = new Mesh(boxGeometry, meshBasiMeterial);
        mesh.name = "box";
        scene.add(mesh);

        //  渲染背景
        const skyboxMaterial: MeshBasicMaterial[] = [
            new MeshBasicMaterial({
                map: textureLoader.load(`${IMG_PATH}/rt.png`),
                side: DoubleSide,
            }),
            new MeshBasicMaterial({
                map: textureLoader.load(`${IMG_PATH}/lf.png`),
                side: DoubleSide,
            }),
            new MeshBasicMaterial({
                map: textureLoader.load(`${IMG_PATH}/up.png`),
                side: DoubleSide,
            }),
            new MeshBasicMaterial({
                map: textureLoader.load(`${IMG_PATH}/dn.png`),
                side: DoubleSide,
            }),
            new MeshBasicMaterial({
                map: textureLoader.load(`${IMG_PATH}/bk.png`),
                side: DoubleSide,
            }),
            new MeshBasicMaterial({
                map: textureLoader.load(`${IMG_PATH}/ft.png`),
                side: DoubleSide,
            }),
        ];

        //  天空为大盒子
        const skyboxGeometry: BoxGeometry = new BoxGeometry(500, 500, 500);
        const skyboxMesh: Mesh = new Mesh(skyboxGeometry, skyboxMaterial);
        skyboxMesh.name = "skyboxMesh";
        scene.add(skyboxMesh);

        const render = () => {
            stop = requestAnimationFrame(() => render());
            renderer.render(scene, camera);
            const box: Object3D | undefined = scene.getObjectByName("box");
            const skyboxMesh: Object3D | undefined = scene.getObjectByName(
                "skyboxMesh"
            );

            if (box) {
                box.rotation.x += 0.01;
                box.rotation.y += 0.01;
            }
            if (skyboxMesh) {
                skyboxMesh.rotation.y += 0.001;
            }
        };

        //  窗口 改变
        window.addEventListener("resize", () => onWindowResize());

        const onWindowResize = () => {
            renderer.setSize(getPageDom.value.width, getPageDom.value.height);
            camera.aspect = getPageDom.value.width / getPageDom.value.height; //  处理 浏览器缩放
            camera.updateProjectionMatrix(); //  更新窗口
        };
        onMounted(() => {
            const block: HTMLElement | null = document.getElementById("block");
            if (block) {
                block.appendChild(renderer.domElement);
            }
            render();
        });

        //  离开页面停止渲染
        onUnmounted(() => {
            cancelAnimationFrame(stop);
        });
        return {};
    },
});
</script>

<style scoped>
#block {
    height: 100%;
}
</style>