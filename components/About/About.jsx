import React from "react";
import styles from "./about.module.css";

const About = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_items}>
					<div className={styles.container_item_1}>
						<img src="" alt="" />
					</div>
				</div>
				<div className={styles.container_items}>
					<div className={styles.container_item_2}>
						<h1>Brandon Hach</h1>
						<p>Digital Craftsman ( Artist / Developer / Designer )</p>
					</div>
				</div>
				<div className={styles.container_items}>
					<div className={styles.container_item_3}>
						<h2>Work</h2>
						<p>About myself bla bla bla</p>
						<button>My Portfolio!</button>
					</div>
				</div>
				<div className={styles.container_items}>
					<div className={styles.container_item_4}>
						<h2>More about myself</h2>
						<p>I enjoy listening to music</p>
						<p>Work out</p>
						<p>Video games</p>
						<p>Enjoying sushi with friends</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
