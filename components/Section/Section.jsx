import React from "react";
import styles from "./section.module.css";
import Image from "next/image";

const Section = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_item}></div>
				<div className={styles.container_item}>
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
				</div>
				<div className={styles.container_item}>
					<Image src="/Images/coding.gif" width={500} height={500}></Image>
				</div>
				<div className={styles.container_item}>
					<h1></h1>
				</div>
			</div>
		</>
	);
};

export default Section;
