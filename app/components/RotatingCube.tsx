"use client";

import { useRef, useEffect } from "react";
import { Scene,  PerspectiveCamera, WebGLRenderer,
         BoxGeometry, MeshBasicMaterial, Mesh,
         EdgesGeometry, LineBasicMaterial, LineSegments } from "three";

import "./RotatingCube.css";

export const RotatingCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up scene
    const scene = new Scene();


    // Set up camera
    const width = mountRef.current?.clientWidth || 0;
    const height = mountRef.current?.clientHeight || 0;
    const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current?.appendChild(renderer.domElement);

    // Defines the cube face properties
    const geometry = new BoxGeometry(2.8, 2.8, 2.8);
    const material = new MeshBasicMaterial({ color: 0xf1f1f1 });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    // Add green edges to the cube
    const edges = new EdgesGeometry(geometry);
    const lineMaterial = new LineBasicMaterial({
      color: 0x000000,
      linewidth: 2,
    });
    const line = new LineSegments(edges, lineMaterial);
    cube.add(line);

    // Animation loop
    const animate = () => {
      // cube.rotation.x += 0.005;
      // cube.rotation.y += 0.005;

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
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="rotating-cube z-1"
      style={{
        width: "100%",
        height: "420px",
        background: "transparent",
        position: "relative",
      }}
    />
  );
}
