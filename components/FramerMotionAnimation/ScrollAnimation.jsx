import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import styles from "./animation.module.css";

const ScrollAnimation = ({ children, delayTime, xInitial, xBegin, yInitial, yBegin }) => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const animation = useAnimation();

	useEffect(() => {
		if (isInView) {
			animation.start({
				x: xBegin,
				y: yBegin,
				transition: {
					duration: 0.75,
					delay: delayTime,
				},
				opacity: 100,
			});
		}
		if (!isInView) {
			animation.start({ opacity: 0, x: xInitial, y: yInitial });
		}
	}, [isInView, animation, delayTime, xBegin, xInitial, yBegin, yInitial]);

	return (
		<>
			<div className={styles.main} ref={ref}>
				<motion.div animate={animation}>{children}</motion.div>
			</div>
		</>
	);
};

export default ScrollAnimation;
