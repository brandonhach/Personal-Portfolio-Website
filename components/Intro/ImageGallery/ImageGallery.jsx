import React from "react";
import styles from "./imagegallery.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageGallery = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 4 }}>
				<div className={styles.background_image}>
					<Image
						src="/Images/1.jpg"
						alt="Background Image"
						width={400}
						height={500}
						layout="fixed-intrinsic" // Change this according to your needs
					/>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 1, y: 100 }}
				animate={{ opacity: 0, y: 0 }}
				transition={{ duration: 1, delay: 3 }}>
				<div className={styles.container_grid}>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}>
						<div className={styles.container_item}>
							<Image
								src="/Images/1.jpg"
								alt=""
								width={400}
								height={500}
								layout="fixed-intrinsic"></Image>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 2 }}>
						<div className={styles.container_item}>
							<Image
								src="/Images/2.jpg"
								alt=""
								width={600}
								height={300}
								layout="fixed-intrinsic"></Image>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 3 }}>
						<div className={styles.container_item}>
							<Image
								src="/Images/3.jpg"
								alt=""
								width={600}
								height={400}
								layout="fixed-intrinsic"></Image>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 4 }}>
						<div className={styles.container_item}>
							<Image
								src="/Images/4.jpg"
								alt=""
								width={500}
								height={400}
								layout="fixed-intrinsic"></Image>
						</div>
					</motion.div>

					<div className={styles.container_item}></div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 5 }}>
						<div className={styles.container_item}>
							<Image
								src="/Images/5.jpg"
								alt=""
								width={400}
								height={350}
								layout="fixed-intrinsic"></Image>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default ImageGallery;
