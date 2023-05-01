import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

export class Grid {
  constructor(length, width, scene, baseColor) {
    // Define the dimensions of the grid
    this.length = length; // Number of rows
    this.width = width; // Number of columns

    // Create a box geometry for each cell in the grid
    const cellWidth = 1;
    const cellHeight = 1;
    const cellDepth = 1;
    const cellGeometry = new THREE.BoxGeometry(cellWidth, cellHeight, cellDepth);


    // Create a material for the grid lines
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x2c2d28, });

    // Create a GLTFExporter instance to export the grid as a GLTF file
    this.gltfExporter = new GLTFExporter();

    // Create an array to store the cells and lines in the grid
    this.cells = [];
    this.lines = [];

    // Iterate over each row and column in the grid
    for (let row = 0; row < this.length; row++) {
      for (let col = 0; col < this.width; col++) {
        // Create a material for the X and O symbols
        const symbolMaterial = new THREE.MeshBasicMaterial({ color: baseColor});

        // Create a mesh for the cell
        const cellMesh = new THREE.Mesh(cellGeometry, symbolMaterial);

        // Set the position of the cell based on the row and column
        cellMesh.position.set(
          col * cellWidth - ((this.width - 1) * cellWidth) / 2,
          ((this.length - 1) * cellHeight) / 2 - row * cellHeight,
          0
        );

        // Add the cell mesh to the scene and to the cells array
        //scene.add(cellMesh);
        this.cells.push(cellMesh);

        // Create meshes for the horizontal and vertical grid lines
        if (row !== this.length - 1) {
          const horizontalLineGeometry = new THREE.BoxGeometry(cellWidth+0.01, 0.07, cellDepth+0.01);
          const horizontalLineMesh = new THREE.Mesh(horizontalLineGeometry, lineMaterial);
          horizontalLineMesh.position.set(cellMesh.position.x, cellMesh.position.y - cellHeight / 2, cellMesh.position.z);
          //scene.add(horizontalLineMesh);
          this.lines.push(horizontalLineMesh);
        }
        if (col !== this.width - 1) {
          const verticalLineGeometry = new THREE.BoxGeometry(0.07, cellHeight+0.01, cellDepth+0.1);
          const verticalLineMesh = new THREE.Mesh(verticalLineGeometry, lineMaterial);
          verticalLineMesh.position.set(cellMesh.position.x + cellWidth / 2, cellMesh.position.y, cellMesh.position.z);
          //scene.add(verticalLineMesh);
          this.lines.push(verticalLineMesh);
        }
      }
    }
    //scene.add(...this.cells);
    //scene.add(...this.lines);
  }

  // Export the grid as a GLTF file
  exportGLTF() {
    const exportScene = new THREE.Scene();
    exportScene.add(...this.cells);
    exportScene.add(...this.lines);
    
    this.gltfExporter.parse(exportScene, function (result) {
      const gltfBlob = new Blob([JSON.stringify(result)], { type: 'application/octet-stream' });
      const gltfUrl = URL.createObjectURL(gltfBlob);
      // Do something with the gltfUrl
    });
  }
  
}

