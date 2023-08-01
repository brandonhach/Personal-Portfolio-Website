import React from "react";
import styles from "./intro.module.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import Banner from "./Banner/Banner";

const Intro = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_banner}>
					<Banner></Banner>
				</div>
				<div className={styles.container_images}>
					<ImageGallery></ImageGallery>
				</div>
			</div>
		</>
	);
};

export default Intro;
