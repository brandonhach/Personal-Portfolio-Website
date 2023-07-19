"use client";
import React, { Suspense, useState, useEffect } from "react";
import styles from "./about.module.css";
import aries from "../../public/aries.png";
import { Canvas } from "react-three-fiber";
import { Model } from "@/lib/Desktop";
import { OrbitControls } from "@react-three/drei";
import { motion, variants, staggerChildren } from "framer-motion";

const About = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => setLoading(false), 125);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_items}>
					<div className={styles.container_item_1}>
						<Canvas camera={{ position: [27, 3, 0], fov: 50, castShadow: true }}>
							<pointLight position={[0, 0, 0]} intensity={2} castShadow />
							<ambientLight intensity={0.3}></ambientLight>
							<Suspense fallback={null}></Suspense>
							<Model />
							<OrbitControls enableZoom={true}></OrbitControls>
						</Canvas>
					</div>
				</div>
				{!loading && (
					<>
						<div className={styles.container_items}>
							<div className={styles.container_item_2}>
								<div className={styles.item_2_left}>
									<h1>Hi, I'm Brandon Hach</h1>
									<p>UNC Charlotte ( Student / Developer )</p>
								</div>
								<div className={styles.item_2_right}>
									<img src={aries} alt="" height={100} width={100} />
								</div>
							</div>
						</div>
						<div className={styles.container_items}>
							<div className={styles.container_item_3}>
								<h2>Work</h2>
								<p>
									Brandon is a Computer Science Student with a concentration in
									Software Engineering. He has a passion for developing and
									building applications for fun. His tech stack that he enjoys
									using are Next.js + Java Springboot + MongoDB.
								</p>
							</div>
							<button>My Portfolio</button>
						</div>
						<div className={styles.container_items}>
							<div className={styles.container_item_4}>
								<h2>About myself</h2>
								<li>Enjoys listening to vinyl sets.</li>
								<li>Lift weights.</li>
								<li>Programming</li>
								<li>Hanging out with friends.</li>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default About;
