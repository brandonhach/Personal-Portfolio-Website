import React from "react";
import styles from "./portfolio.module.css";
import SlideShow from "../Slideshow/SlideShow";
import Link from "next/link";

const Portfolio = () => {
	const videoListMarco = ["/Videos/MarcoTracker/1.mp4", "/Videos/MarcoTracker/2.mp4"];
	const videoListTutor = [
		"/Videos/TutoringApp/1.mp4",
		"/Videos/TutoringApp/2.mp4",
		"/Videos/TutoringApp/3.mp4",
	];
	const videoListEmail = ["/Videos/MarcoTracker/1.mp4", "/Videos/MarcoTracker/2.mp4"];

	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_left}>
					<div className={styles.item_left}>
						<SlideShow videoArray={videoListTutor}></SlideShow>
					</div>
					<div className={styles.item_info}>
						<h2>
							🤖{" "}
							<Link
								href={"https://github.com/brandonhach/AI-Tutoring-App"}
								target="_blank">
								Ai Tutoring Web App Concept
							</Link>
						</h2>
						<p>
							<b>Java Springboot</b> + <b> Next.js</b>
						</p>
						<p>
							Communicated with OpenAI API to create a chatbot in collaboration with a
							partner.
						</p>
					</div>

					<div className={styles.item_left}>
						<SlideShow videoArray={videoListEmail}></SlideShow>
					</div>
					<div className={styles.item_info}>
						<h2>
							📧{" "}
							<Link href={"https://github.com/brandonhach "} target="_blank">
								Personal Email Service
							</Link>
						</h2>
						<p>
							<b>Java Springboot </b>
						</p>
					</div>
				</div>
				<div className={styles.container_right}>
					<h1>Projects I worked on.</h1>
					<div className={styles.item_right}>
						<SlideShow videoArray={videoListMarco}></SlideShow>
					</div>
					<div className={styles.item_info}>
						<h2>
							🍗{" "}
							<Link
								href={"https://github.com/OrinSparks/MacroTracker"}
								target="_blank">
								Marco Nutrient Tracker
							</Link>
						</h2>
						<p>
							<b>React.js</b> + <b> Firebase.js</b>
						</p>
						<p>
							A simple marco nutrient tracker where user's can create a personal
							account to document their own nutritional goal. Developed in a group of
							three people.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
