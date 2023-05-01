import * as THREE from 'three';
export function handleCameraView(camera, renderer, scene, cameraDistance) {
  // Add event listener for mouse move to move the camera
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  // Helper function to convert degrees to radians
  function toRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  // Initialize camera rotation
  let cameraRotation = new THREE.Euler(0, 0, 0, 'XYZ');

  document.addEventListener('mousemove', (event) => {
    // Check if the mouse pointer is over the slider container
    const isOverSlider = event.target.closest('#slider-container') !== null;
    console.log(event.clientX, event.clientY)
    // Disable camera rotation if the mouse is over the slider
    if (isOverSlider) {
      isDragging = false;
      return;
    }

    const deltaMove = {
      x: event.clientX - previousMousePosition.x,
      y: event.clientY - previousMousePosition.y,
    };

    if (isDragging) {
      const deltaRotation = new THREE.Euler(
        toRadians(deltaMove.y * 0.1),
        toRadians(deltaMove.x * 0.1),
        0,
        'XYZ'
      );

      // Update camera rotation
      cameraRotation.x -= deltaRotation.x;
      cameraRotation.y -= deltaRotation.y;

      camera.setRotationFromEuler(cameraRotation);
      renderer.render(scene, camera);
    }

    previousMousePosition = { x: event.clientX, y: event.clientY };
  }, false);

  document.addEventListener('mousedown', (event) => {
    isDragging = true;
  });

  document.addEventListener('mouseup', (event) => {
    isDragging = false;
  });

  document.addEventListener('wheel', (event) => {
    const delta = event.deltaY * 0.001;
    camera.position.z += delta;
    renderer.render(scene, camera);
  });

  // Add event listener for keydown to move the camera
  const moveSpeed = 0.1 * camera.position.z;
  document.addEventListener('keydown', (event) => {
    switch(event.key) {
      case 'w':
        camera.position.y += moveSpeed;
        break;
      case 'a':
        camera.position.x -= moveSpeed;
        break;
      case 's':
        camera.position.y -= moveSpeed;
        break;
      case 'd':
        camera.position.x += moveSpeed;
        break;
    }
    renderer.render(scene, camera);
  });

  // Add event listener to re-align camera to starting position
  document.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
      camera.position.set(0,0,cameraDistance)
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      renderer.render(scene, camera)
    }
  });
}
