import React from "react";
import styles from "./section.module.css";
import Image from "next/image";
import ScrollAnimation from "../FramerMotionAnimation/ScrollAnimation";
import { motion } from "framer-motion";

const Section = () => {
	return (
		<>
			<div className={styles.container}>
				<ScrollAnimation delayTime={0.3} xInitial={-100} xBegin={0} yInitial={0} yBegin={0}>
					<div className={styles.container_item}>
						<motion.div
							whileHover={{ scale: 1.05 }}
							onHoverStart={(e) => {}}
							onHoverEnd={(e) => {}}
							className={styles.container_item_skills}>
							<h3>🏸Current Tech Stack</h3>
							<b>Next.js + Java + MongoDB</b>
							<h3>Front-end</h3>
							<b>React.js</b>
							<b>Next.js</b>
							<b>Javascript</b>
							<b>HTML</b>
							<b>CSS</b>
							<h3>Back-end </h3>
							<b>Java</b>
							<b>Java Springboot</b>
							<h3>Database </h3>
							<b>MySQL</b>
							<b>MongoDB</b>
							<b>Firebase</b>
						</motion.div>
					</div>
				</ScrollAnimation>
				<ScrollAnimation delayTime={0.3} xInitial={100} xBegin={0} yInitial={0} yBegin={0}>
					<div className={styles.container_item}>
						<Image
							src="/Images/coding.gif"
							width={500}
							height={500}
							alt="Codes"></Image>
					</div>
				</ScrollAnimation>
			</div>
		</>
	);
};

export default Section;
