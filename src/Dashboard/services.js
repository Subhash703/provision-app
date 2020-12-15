import React from "react";
import styles from "./services.module.css";
import { Card, Table } from "antd";

// import InfiniteScroll from "react-infinite-scroller";

function Services(props) {
	const dataSource = [
		{
			key: "1",
			serviceType: "Tatto removal",
			thisMonth: 4,
			lastMonth: 1,
		},
		{
			key: "2",
			serviceType: "Tatto removal",
			thisMonth: 4,
			lastMonth: 1,
		},
		{
			key: "3",
			serviceType: "Tatto removal",
			thisMonth: 4,
			lastMonth: 1,
		},
		{
			key: "4",
			serviceType: "Tatto removal",
			thisMonth: 4,
			lastMonth: 1,
		},
	];

	const columns = [
		{
			title: "Service Type",
			dataIndex: "serviceType",
			key: "serviceType",
		},
		{
			title: "This Month",
			dataIndex: "thisMonth",
			key: "thisMonth",
		},
		{
			title: "Last Month",
			dataIndex: "lastMonth",
			key: "lastMonth",
		},
	];

	return (
		<Card bordered={false} className={styles.card}>
			<div className={styles.cardHeader}>
				<h4>Top Services</h4>
				<div className={styles.actionBtn}></div>
			</div>
			<div className={styles.card_content}>
				<Table dataSource={dataSource} columns={columns} size="small" />
			</div>
		</Card>
	);
}

export default Services;
