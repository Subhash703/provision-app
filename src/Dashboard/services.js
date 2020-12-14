import React, { useEffect, useState } from "react";
import styles from "./services.module.css";
import { Card, List, message, Avatar, Spin, Button } from "antd";

// import InfiniteScroll from "react-infinite-scroller";

function Services(props) {
	return (
		<Card bordered={false} className={styles.card}>
			<div className={styles.cardHeader}>
				<h4>
					Our Services <br />
					<small>We have best services in the world</small>
				</h4>
				<div className={styles.actionBtn}></div>
			</div>
		</Card>
	);
}

export default Services;
