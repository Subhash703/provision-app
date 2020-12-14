import React, { useEffect, useState } from "react";
import styles from "./todaysAppoinment.module.css";
import { Card, List, message, Avatar, Spin, Button } from "antd";
import NoAppoinment from "./NoAppoinment";
// import InfiniteScroll from "react-infinite-scroller";

function TodaysAppoinment(props) {
	const [appoinments, setAppoinments] = useState([]);
	const [loading, setLoading] = useState(false);
	const [hasMore, sethasMore] = useState(true);

	const tempData = [
		{
			id: 1,
			date: `8th Sep`,
			description: "Ajfhs jds sjh ds",
			timedata: "Ramesh, 1 hr 30 min with suresh",
			charges: `₹ 1000`,
		},
		{
			id: 2,
			date: `8th Sep`,
			description: "Ajfhs jds sjh ds",
			timedata: "Ramesh, 1 hr 30 min with suresh",
			charges: `₹ 1000`,
		},
	];
	useEffect(() => {
		// setAppoinments(tempData);
	}, []);
	return (
		<Card bordered={false} className={styles.card}>
			<div className={styles.cardHeader}>
				<h4>
					Today's Next Appoinment <br />
					<small>Next 7 days</small>
				</h4>
				<div className={styles.actionBtn}></div>
			</div>
			<div className={styles.card_content}>
				{appoinments.length < 1 ? (
					<NoAppoinment className={styles.no_appoinment__container} />
				) : (
					appoinments.map((item) => {
						return (
							<div key={item.id} className={styles.card_item}>
								<div className={styles.item_date}>{item.date}</div>
								<div className="styles.item_description">
									<p>Saturday, 8th septemeber</p>
									<h4>{item.description}</h4>
									<p>{item.timedata}</p>
								</div>
								<div className={styles.card_action}>
									<a href="">{item.charges}</a>
								</div>
							</div>
						);
					})
				)}
			</div>
		</Card>
	);
}

export default TodaysAppoinment;
