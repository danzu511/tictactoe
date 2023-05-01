import * as THREE from 'three';

export function createMaterialArray() {
  const skyboxImagepaths = ['../static/skybox/left.png', '../static/skybox/right.png', '../static/skybox/top.png', '../static/skybox/bottom.png', '../static/skybox/back.png', '../static/skybox/front.png'];
  const materialArray = skyboxImagepaths.map((image) => {
    const texture = new THREE.TextureLoader().load(image);

    return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }); // <---
  });
  return materialArray;
}
