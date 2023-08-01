import React, { useState } from "react";
import styles from "./slideshow.module.css";
import Image from "next/image";

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
					<Image src={imageArray[index]} className={styles.img} layout="fill"></Image>
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
