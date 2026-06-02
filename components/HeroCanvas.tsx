"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create 3D shapes
    const shapes: THREE.Mesh[] = [];

    // Torus
    const torusGeometry = new THREE.TorusGeometry(2, 0.7, 16, 32);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0xff6b6b,
      emissive: 0xff6b6b,
      wireframe: false,
      shininess: 100,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-3, 2, -2);
    scene.add(torus);
    shapes.push(torus);

    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(1.5, 4);
    const icoMaterial = new THREE.MeshPhongMaterial({
      color: 0x4ecdc4,
      emissive: 0x4ecdc4,
      wireframe: false,
      shininess: 100,
    });
    const ico = new THREE.Mesh(icoGeometry, icoMaterial);
    ico.position.set(3, -2, -2);
    scene.add(ico);
    shapes.push(ico);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(1.2, 0);
    const octaMaterial = new THREE.MeshPhongMaterial({
      color: 0xffd93d,
      emissive: 0xffd93d,
      wireframe: false,
      shininess: 100,
    });
    const octa = new THREE.Mesh(octaGeometry, octaMaterial);
    octa.position.set(0, 3, -3);
    scene.add(octa);
    shapes.push(octa);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x6bcf7f,
      emissive: 0x6bcf7f,
      wireframe: false,
      shininess: 100,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, -3, -2);
    scene.add(sphere);
    shapes.push(sphere);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xff6b9d, 0.5);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.002 + index * 0.0005;
        shape.rotation.y += 0.003 + index * 0.0008;
        shape.rotation.z += 0.001 + index * 0.0003;

        // Mouse interaction
        shape.position.x += (mouseX * 2 - shape.position.x) * 0.02;
        shape.position.y += (mouseY * 2 - shape.position.y) * 0.02;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="hero-canvas-container" />;
}
