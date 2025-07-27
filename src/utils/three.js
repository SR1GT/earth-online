import gsap from "gsap";
import {
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  TextureLoader,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default class Earth3D {
  scene = null;
  lightMaterial = null;
  darkMaterial = null;
  earth = null;

  constructor(container) {
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.scene = new Scene();

    const camera = new PerspectiveCamera(30, width / height, 0.1, 3000);
    camera.position.set(125, 125, 125);
    camera.lookAt(0, 0, 0);

    const renderer = new WebGLRenderer({
      logarithmicDepthBuffer: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xffffff);
    renderer.setClearAlpha(0);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.mouseButtons.MIDDLE = undefined;
    controls.mouseButtons.RIGHT = undefined;

    this.#loadMaterials().then(() => {
      const geometry = new SphereGeometry(50, 128, 128);
      this.isDark = this.#checkIsDark();
      this.earth = new Mesh(
        geometry,
        this.isDark ? this.darkMaterial : this.lightMaterial
      );
      this.scene.add(this.earth);

      renderer.setAnimationLoop(() => {
        controls.update();
        this.earth.rotation.y += 0.005;
        if (this.#checkIsDark()) this.#changeMaterial();
        renderer.render(this.scene, camera);
      });
    });
  }

  #checkIsDark = () => new Date().getHours() > 18 || new Date().getHours() < 6;

  async #loadMaterials() {
    const loader = new TextureLoader();
    this.lightMaterial = new MeshBasicMaterial({
      map: await loader.loadAsync("/light.jpg"),
    });
    this.darkMaterial = new MeshBasicMaterial({
      map: await loader.loadAsync("/dark.jpg"),
    });
  }

  #changeMaterial() {
    gsap.to(this.earth.material, {
      opacity: 0,
      duration: 0.1,
      onComplete: () => {
        this.earth.material = this.isDark
          ? this.darkMaterial
          : this.lightMaterial;
        this.earth.material.transparent = true;
        this.earth.material.opacity = 0;
        gsap.to(this.earth.material, {
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  }
}
