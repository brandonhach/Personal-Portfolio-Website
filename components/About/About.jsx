import React from "react";
import styles from "./about.module.css";
import aries from "../../public/aries.png";

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
						<div className={styles.item_2_left}>
							<h1>Brandon Hach</h1>
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
						<p>About myself bla bla bla</p>
					</div>
					<button>My Portfolio!</button>
				</div>
				<div className={styles.container_items}>
					<div className={styles.container_item_4}>
						<h2>About myself</h2>
						<li>Enjoys music.</li>
						<li>Lift weights.</li>
						<li>Programming</li>
						<li>Hanging out with friends.</li>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
