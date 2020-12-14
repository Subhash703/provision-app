import React, { useEffect, useState } from "react";
import styles from "./comingAppoinment.module.css";
import { Card, List, message, Avatar, Spin, Button } from "antd";
import Icon from "@ant-design/icons";
import { HomeIcon, CalendarIcon, ClientIcon } from "../../assets/svg/Icons";
// import InfiniteScroll from "react-infinite-scroller";

function ComingAppoinments(props) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [hasMore, sethasMore] = useState(true);

	let randomData = [
		{
			id: 1,
			date: "8th sep",
			description: "Ajfhs jds sjh ds",
			timedata: "Ramesh, 1 hr 30 min with suresh",
		},
		{
			id: 2,
			date: "8th sep",
			description: "Ajfhs jds sjh ds",
			timedata: "Ramesh, 1 hr 30 min with suresh",
		},
		{
			id: 3,
			date: "8th sep",
			description: "Ajfhs jds sjh ds",
			timedata: "Ramesh, 1 hr 30 min with suresh",
		},
		{
			id: 4,
			date: "8th sep",
			description: "Ajfhs jds sjh ds",
			timedata: "Ramesh, 1 hr 30 min with suresh",
		},
		{
			id: 5,
			date: "8th sep",
			description: "Ajfhs jds sjh ds",
			timedata: "Ramesh, 1 hr 30 min with suresh",
		},
		{
			id: 6,
			date: "8th sep",
			description: "Ajfhs jds sjh ds",
			timedata: "Ramesh, 1 hr 30 min with suresh",
		},
	];

	useEffect(() => {
		setData(randomData);
	}, []);
	console.log(data);
	return (
		<Card bordered={false} className={styles.card}>
			<div className={styles.cardHeader}>
				<h4>
					Upcoming ComingAppoinments <br />
					<small>7 days</small>
				</h4>
				<div className={styles.actionBtn}>
					<HomeIcon />
				</div>
			</div>
			<div className={styles.card_content}>
				<div className={styles.card_item}>
					<div className={styles.item_date}>
						8th <br /> Sep
					</div>
					<div className="styles.item_description">
						<p>Saturday, 8th septemeber</p>
						<h4>Tatto on hand</h4>
						<p>Ramesh, 1hr 30min with Sureshe</p>
					</div>
					<div className={styles.card_action}>
						<a href="">Cancle</a>
					</div>
				</div>
				<div className={styles.card_item}>
					<div className={styles.item_date}>
						8th <br /> Sep
					</div>
					<div className={styles.item_description}>
						<p>Saturday, 8th septemeber</p>
						<h4>Tatto on hand</h4>
						<p>Ramesh, 1hr 30min with Sureshe</p>
					</div>
					<div className={styles.card_action}>
						<a href="">Cancle</a>
					</div>
				</div>
				<div className={styles.card_item}>
					<div className={styles.item_date}>
						8th <br /> Sep
					</div>
					<div className={styles.item_description}>
						<p>Saturday, 8th septemeber</p>
						<h4>Tatto on hand</h4>
						<p>Ramesh, 1hr 30min with Sureshe</p>
					</div>
					<div className={styles.card_action}>
						<a href="">Cancle</a>
					</div>
				</div>
				<div className={styles.card_item}>
					<div className={styles.item_date}>
						8th <br /> Sep
					</div>
					<div className={styles.item_description}>
						<p>Saturday, 8th septemeber</p>
						<h4>Tatto on hand</h4>
						<p>Ramesh, 1hr 30min with Sureshe</p>
					</div>
					<div className={styles.card_action}>
						<a href="">Cancle</a>
					</div>
				</div>
				<div className={styles.card_item}>
					<div className={styles.item_date}>
						8th <br /> Sep
					</div>
					<div className={styles.item_description}>
						<p>Saturday, 8th septemeber</p>
						<h4>Tatto on hand</h4>
						<p>Ramesh, 1hr 30min with Sureshe</p>
					</div>
					<div className={styles.card_action}>
						<a href="">Cancle</a>
					</div>
				</div>
			</div>
		</Card>
	);
}

export default ComingAppoinments;
