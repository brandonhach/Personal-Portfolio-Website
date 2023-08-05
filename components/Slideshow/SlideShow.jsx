import React, { useState } from "react";
import styles from "./slideshow.module.css";
import { motion, AnimatePresence } from "framer-motion";

const SlideShow = ({ videoArray }) => {
	const [index, setIndex] = useState(0);

	function prevStep() {
		if (index === 0) {
			setIndex(videoArray.length - 1);
			return;
		}
		setIndex(index - 1);
	}
	function nextStep() {
		if (index === videoArray.length - 1) {
			setIndex(0);
			return;
		}
		setIndex(index + 1);
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.slideshow}>
					<AnimatePresence>
						<motion.video
							src={videoArray[index]}
							key={videoArray[index]}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							autoPlay
							loop
							muted
							loading="lazy"
							preload="none"
							className={styles.img}></motion.video>
					</AnimatePresence>

					<button className={styles.prevBtn} onClick={prevStep}>
						⬅️
					</button>
					<button className={styles.nextBtn} onClick={nextStep}>
						➡️
					</button>
				</div>
			</div>
		</>
	);
};

export default SlideShow;
