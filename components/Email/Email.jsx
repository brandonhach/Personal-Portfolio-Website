import React, { useRef, useState } from "react";
import styles from "./email.module.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Email = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const form = useRef();
	const [emailStatus, setEmailStatus] = useState(null);

	if (emailStatus === "success") {
		setTimeout(() => setEmailStatus(null), 15000);
	}
	if (emailStatus === "error") {
		setTimeout(() => setEmailStatus(null), 15000);
	}

	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendEmail = async (e) => {
		try {
			const result = await emailjs.sendForm(
				"service_rv9p5jf",
				"template_gu15rkl",
				form.current,
				"VJPBEk4HhsDQnAh8b"
			);
			setEmailStatus("success");
			setIsSubmitting(true);
		} catch (error) {
			setEmailStatus("error");
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.item}>
					<h1>Contact Me!</h1>

					<form ref={form} onSubmit={handleSubmit(sendEmail)}>
						{/** Name */}
						<p className={styles.input_label}>Name *</p>
						<input
							name="name"
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
							name="email"
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
							name="phone"
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
							name="message"
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
							<input
								type="submit"
								value="Send Message"
								disabled={isSubmitting}
								id={styles.submitBtn}
							/>
						</motion.div>
						{emailStatus === "success" && (
							<span className={styles.successMsg}>
								Email sent! If you need to sent another message, refresh!
							</span>
						)}
						{emailStatus === "error" && (
							<span className={styles.errorMsg}>
								Email couldn&apos;t be sent. Check back or try again later.
							</span>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default Email;
