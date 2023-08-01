"use client";
import React, { Suspense, useState, useEffect } from "react";
import styles from "./about.module.css";
import aries from "../../public/aries.png";
import { Canvas } from "react-three-fiber";
import { Model } from "@/lib/Desktop";
import { OrbitControls } from "@react-three/drei";
import { motion, variants, staggerChildren } from "framer-motion";
import Link from "next/link";

const About = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timeout = setTimeout(() => setLoading(false), 500);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<>
			<div className={styles.container}>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 2 }}>
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
				</motion.div>
				{!loading && (
					<>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 1 }}>
							<div className={styles.container_items}>
								<div className={styles.container_item_2}>
									<div className={styles.item_2_left}>
										<h1 className={styles.intro}>Hey there! I'm- </h1>
										<h1 className={styles.name}>Brandon Hach.</h1>
										<p>Charlotte, North Carolina ( Student / Developer )</p>
									</div>
									<div className={styles.item_2_right}>
										<img src={aries} alt="" height={100} width={100} />
									</div>
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.5 }}>
							<div className={styles.container_items}>
								<div className={styles.container_item_3}>
									<h2>⚡About me</h2>
									<div className={styles.container_item_3_info}>
										<p>
											Brandon is a <b>Computer Science Student</b> with a
											Concentration in <b>Software Engineering</b>.
										</p>
										<p>
											He has a passion for developing and building
											applications for fun.
										</p>
										<p>
											What he is interested in building is anything related to{" "}
											<b>Fullstack Development</b> such as <b>Web Dev</b>,{" "}
											<b> APIs</b>,<b> Database management</b>, and{" "}
											<b> Automation</b>.
										</p>
										<p>
											He enjoys collaborating with other people on their open
											source projects.
										</p>
										<p>
											When he's not coding, he spents his time listening to
											<b> old vinyls</b>, <b> lifting weight</b>,
											<b> tracking marcos</b>, and
											<b> hanging out with friends</b>.
										</p>
										<p>
											Oh, and he enjoys eating <b> poke</b> and <b> sushi</b>.
											<b> Publix subs</b> are also his favorite food.
										</p>
									</div>
								</div>
								{/* <Link className={styles.LinkButton} href={"/portfolio"}>
									<button>My Portfolio</button>
								</Link> */}
							</div>
						</motion.div>
					</>
				)}
			</div>
		</>
	);
};

export default About;
