import React, { Suspense, useState, useEffect } from "react";
import styles from "./contact.module.css";
import { Canvas } from "react-three-fiber";
import { Model } from "@/lib/Robot";
import { OrbitControls } from "@react-three/drei";
import Email from "../Email/Email";
import ScrollAnimation from "../FramerMotionAnimation/ScrollAnimation";

const Contact = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_info}>
					<ScrollAnimation
						delayTime={0.5}
						xInitial={-100}
						xBegin={0}
						yInitial={0}
						yBegin={0}>
						<h1>👋 Keep In Touch.</h1>
					</ScrollAnimation>

					<ScrollAnimation
						delayTime={0.8}
						xInitial={100}
						xBegin={0}
						yInitial={100}
						yBegin={0}>
						<h3>
							I'm currently specializing in <b>Full-Stack Development</b>.
						</h3>
						<h3>Feel free to get in touch to discuss more about your projects!</h3>
					</ScrollAnimation>
				</div>
				<div className={styles.container_form}>
					<ScrollAnimation
						delayTime={1}
						xInitial={-100}
						xBegin={0}
						yInitial={-100}
						yBegin={0}>
						<div className={styles.container_form_canvas}>
							<Canvas camera={{ position: [27, 3, 0], fov: 50, castShadow: true }}>
								<pointLight position={[0, 0, 0]} intensity={2} castShadow />
								<ambientLight intensity={0.3}></ambientLight>
								<Suspense fallback={null}></Suspense>
								<Model />
								<OrbitControls enableZoom={false}></OrbitControls>
							</Canvas>
						</div>
					</ScrollAnimation>
					<ScrollAnimation
						delayTime={1}
						xInitial={100}
						xBegin={0}
						yInitial={100}
						yBegin={0}>
						<div className={styles.container_form_email}>
							<Email></Email>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</>
	);
};

export default Contact;
