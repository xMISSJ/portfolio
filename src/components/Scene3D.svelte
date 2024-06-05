<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

  export let path = "/images/bloemenbureau/3d/rose.gltf";

  let container: HTMLElement;
  let size = { width: 600, height: 600 };

  onMount(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;

    function init(): void {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        size.width / size.height,
        0.1,
        1000
      );
      camera.position.set(0, 0, 2);
      camera.rotation.set(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(size.width, size.height);

      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.enableZoom = true;
      controls.autoRotate = true;
      controls.enableRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.update();

      camera.fov *= 0.55;
      camera.updateProjectionMatrix();

      // Ambient light
      const ambientLight = new THREE.AmbientLight(0x404040, 10); // Soft white light
      scene.add(ambientLight);

      // Directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true;
      directionalLight.shadow.camera.near = 0.1;
      directionalLight.shadow.camera.far = 100;
      directionalLight.shadow.mapSize.width = 1024;
      directionalLight.shadow.mapSize.height = 1024;
      scene.add(directionalLight);

      const gltfLoader = new GLTFLoader();
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath(
        "https://www.gstatic.com/draco/versioned/decoders/1.4.3/"
      );
      gltfLoader.setDRACOLoader(dracoLoader);

      gltfLoader.load(base + path, (gltf) => {
        const object = gltf.scene;
        object.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        object.position.set(0, 0.1, 0);

        scene.add(object);
        controls.target.copy(new THREE.Vector3(0, 0, 0)); // Set controls target to the origin
        animate();
      });

      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize(): void {
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
      renderer.setSize(size.width, size.height);
    }

    function animate(): void {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer && container && container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  });
</script>

<div
  bind:this={container}
  class="three-container"
  style="width: {size.width}px; height: {size.height}px;"
/>
