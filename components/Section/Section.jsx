import React, { useEffect, useRef } from "react";
import styles from "./section.module.css";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

const Section = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const animation = useAnimation();

	useEffect(() => {
		if (isInView) {
			animation.start({
				x: 0,
				y: 0,
				transition: {
					duration: 1,
					delay: 1,
				},
				opacity: 100,
			});
		}
		if (!isInView) {
			animation.start({ opacity: 0, y: 50 });
		}
	}, [isInView]);
	return (
		<>
			<div ref={ref} className={styles.container}>
				<motion.div animate={animation} className={styles.container_item}>
					<div className={styles.container_item_skills}>
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
					</div>
				</motion.div>
				<div className={styles.container_item}>
					<Image src="/Images/coding.gif" width={500} height={500} alt="Codes"></Image>
				</div>
			</div>
		</>
	);
};

export default Section;
