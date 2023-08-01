import React, { Suspense, useState, useEffect } from "react";
import styles from "./contact.module.css";
import { Canvas } from "react-three-fiber";
import { Model } from "@/lib/Robot";
import { OrbitControls } from "@react-three/drei";
import Email from "../Email/Email";

const Contact = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_info}>
					<h1>Keep In Touch.</h1>
					<h3>
						I'm currently specializing in <b>Full-Stack Development</b>.
					</h3>
					<h3>Feel free to get in touch to discuss more about your projects!</h3>
				</div>
				<div className={styles.container_form}>
					<div className={styles.container_form_canvas}>
						<Canvas camera={{ position: [27, 3, 0], fov: 50, castShadow: true }}>
							<pointLight position={[0, 0, 0]} intensity={2} castShadow />
							<ambientLight intensity={0.3}></ambientLight>
							<Suspense fallback={null}></Suspense>
							<Model />
							<OrbitControls enableZoom={false}></OrbitControls>
						</Canvas>
					</div>
					<div className={styles.container_form_email}>
						<Email></Email>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
