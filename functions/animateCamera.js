import * as THREE from 'three';

export function animateCamera(camera, renderer, scene, cameraDistance, animationDuration) {
  // Define the starting and ending camera positions
  const start = new THREE.Vector3(-10, -10, 10);
  const end = new THREE.Vector3(0, 0, cameraDistance);

  // Define the camera's rotation
  const rotation = new THREE.Euler(Math.PI / 0, 0, 0);

  // Define the duration of the animation (in seconds)
  const duration = animationDuration;

  // Define the start time of the animation
  const startTime = Date.now();

  // Create the animation loop
  function loop() {
    // Calculate the elapsed time since the start of the animation
    const elapsedTime = (Date.now() - startTime) / 1000;

    // Calculate the percentage of the animation that has been completed
    const percentage = Math.min(elapsedTime / duration, 1);

    // Interpolate the camera's position and rotation based on the percentage
    const position = start.clone().lerp(end, percentage);
    const quaternion = new THREE.Quaternion().setFromEuler(rotation).slerp(camera.quaternion, percentage);

    // Update the camera's position and rotation
    camera.position.copy(position);
    camera.setRotationFromQuaternion(quaternion);

    // Render the scene
    renderer.render(scene, camera);

    // Check if the animation is complete
    if (percentage < 1) {
      // Request the next frame of the animation
      requestAnimationFrame(loop);
    }
  }

  // Start the animation loop
  loop();
}
