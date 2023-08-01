import React from "react";
import styles from "./email.module.css";

const Email = () => {
	return (
		<>
			<div className={styles.container}>
				<form action="/submit_form" method="post">
					<div className={styles.form_item}>
						<label htmlFor="name">Name:</label>
						<input type="text" name="name" className={styles.inputSpace} />
						<br />
					</div>
					<div className={styles.form_item}>
						<label htmlFor="email">Email:</label>
						<input type="text" name="email" className={styles.inputSpace} />
						<br />
					</div>
					<div className={styles.form_item}>
						<label htmlFor="subject">Subject:</label>
						<input type="text" name="subject" className={styles.inputSpace} />
						<br />
					</div>
					<div className={styles.form_item}>
						<label htmlFor="name">Prompt:</label>
						<textarea
							name="prompt"
							id="prompt"
							cols="40"
							rows="6"
							className={styles.inputSpace}></textarea>
						<br />
					</div>
					<div className={styles.form_item}>
						<input type="submit" value="Submit" id={styles.submitBtn} />
					</div>
				</form>
			</div>
		</>
	);
};

export default Email;
