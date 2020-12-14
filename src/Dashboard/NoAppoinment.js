import React from "react";
import styles from "./todaysAppoinment.module.css";

function NoAppoinment(props) {
	return (
		<div class={styles.no_appoinment__container}>
			<h1>No Appoinment for today</h1>
		</div>
	);
}

export default NoAppoinment;
