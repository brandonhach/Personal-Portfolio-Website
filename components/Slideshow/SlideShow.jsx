import React, { useState } from "react";
import styles from "./slideshow.module.css";

import { motion, AnimatePresence } from "framer-motion";

const SlideShow = ({ imageArray }) => {
	const [index, setIndex] = useState(0);

	function prevStep() {
		if (index === 0) {
			setIndex(imageArray.length - 1);
			return;
		}
		setIndex(index - 1);
	}
	function nextStep() {
		if (index === imageArray.length - 1) {
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
						<motion.img
							src={imageArray[index]}
							key={imageArray[index]}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							whileHover={{ scale: 1.05 }}
							onHoverStart={(e) => {}}
							onHoverEnd={(e) => {}}
							className={styles.img}></motion.img>
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
