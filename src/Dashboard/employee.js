import React from "react";
import styles from "./employee.module.css";
import { Card, Table } from "antd";

// import InfiniteScroll from "react-infinite-scroller";

function Employees(props) {
	const dataSource = [
		{
			key: "1",
			employee: "Ramesh",
			thisMonth: "1000",
			lastMonth: "1000",
		},
		{
			key: "2",
			employee: "Suresh",
			thisMonth: "1000",
			lastMonth: "1000",
		},
		{
			key: "3",
			employee: "Ramesh",
			thisMonth: 4000 + "r",
			lastMonth: 1000 + "r",
		},
		{
			key: "4",
			employee: "Abhisek",
			thisMonth: 4424,
			lastMonth: 1452,
		},
	];

	const columns = [
		{
			title: "Employee",
			dataIndex: "employee",
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
				<h4>Top Employees</h4>
				<div className={styles.actionBtn}></div>
			</div>
			<div className={styles.card_content}>
				<Table dataSource={dataSource} columns={columns} size="small" />
			</div>
		</Card>
	);
}

export default Employees;
