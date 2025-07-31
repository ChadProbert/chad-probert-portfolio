"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "./RotatingCube.css";

export default function RotatingCube() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Create a buffer of random star positions
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      // spread stars in a cube of size 600 around the origin
      positions[i] = THREE.MathUtils.randFloatSpread(600);
    }

    // Build the geometry + material
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });

    // Create the Points object and add to scene
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Set up camera
    const width = mountRef.current?.clientWidth || 0;
    const height = mountRef.current?.clientHeight || 0;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current?.appendChild(renderer.domElement);

    // Defines the cube face properties
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0x171717 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Add green edges to the cube
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xf9f9f9,
      linewidth: 2,
    });
    const line = new THREE.LineSegments(edges, lineMaterial);
    cube.add(line);

    // Animation loop
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      const newWidth = mountRef.current?.clientWidth || 0;
      const newHeight = mountRef.current?.clientHeight || 0;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      edges.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="rotating-cube"
      style={{
        width: "100%",
        height: "400px",
        background: "transparent",
        position: "absolute",
        top: 50,
        left: 0,
      }}
    />
  );
}
