import React from "react";
import styles from "./email.module.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const Email = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	console.log("errors", errors);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.item}>
					<h1>Contact Me!</h1>

					<form onSubmit={handleSubmit(onSubmit)}>
						{/** Name */}
						<p className={styles.input_label}>Name *</p>
						<input
							type="text"
							placeholder="Name"
							{...register("name", {
								required: true,
								maxLength: 40,
							})}
						/>
						{errors.name && (
							<span className={styles.error}>
								{errors.name.type === "required" && "This field is required."}
								{errors.name.type === "maxLength" &&
									"Name must be 1-40 character long."}
							</span>
						)}
						{/** Email */}
						<p className={styles.input_label}>Email *</p>
						<input
							type="text"
							placeholder="Email"
							{...register("email", {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						{errors.email && (
							<span className={styles.error}>
								{errors.email.type === "required" && "This field is required."}
								{errors.email.type === "pattern" && "Invalid Email."}
							</span>
						)}
						{/** Phone Number */}
						<p className={styles.input_label}>Phone Number</p>
						<input
							type="text"
							placeholder="Phone #"
							{...register("phone", {
								pattern:
									/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
							})}
						/>
						{errors.phone && (
							<span className={styles.error}>
								{errors.phone.type === "pattern" && "Invalid Phone Number."}
							</span>
						)}
						{/** Message */}
						<p className={styles.input_label}>Message *</p>
						<textarea
							rows={5}
							placeholder="Write Your Message"
							{...register("message", {
								required: true,
								maxLength: 250,
							})}
						/>
						{errors.message && (
							<span className={styles.error}>
								{errors.message.type === "required" && "This field is required."}
								{errors.message.type === "maxLength" &&
									"Message must be 1-250 characters long."}
							</span>
						)}
						<motion.div
							className={styles.container_item_3}
							whileHover={{ scale: 1.05 }}
							onHoverStart={(e) => {}}
							onHoverEnd={(e) => {}}>
							<input type="submit" value="Send Message" id={styles.submitBtn} />
						</motion.div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Email;
