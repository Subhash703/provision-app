import React from "react";

import { Card, Typography } from "antd";
import styles from "./recentsales.module.css";
import { Bar } from "@reactchartjs/react-chart.js";

const { Title, Text } = Typography;

const data = {
	labels: [
		"Jan",
		"Feb",
		"Mar.",
		"Apr.",
		"May",
		"Jun.",
		"Jul.",
		"Aug.",
		"Sept.",
		"Oct.",
		"Nov.",
		"Dec.",
	],
	datasets: [
		{
			label: "Sales according to months",
			data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
			backgroundColor: "#cbd7ff",
		},
	],
};

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};

function RecentSales() {
	return (
		<Card
			title="Recent Sales"
			bordered={false}
			className={[styles.card, styles.cardHeader]}
		>
			<Title level={2}>₹ 2000</Title>
			<Text type="secondary">Appointments:</Text>
			<Text strong> 10</Text>
			<br />
			<Text type="secondary">Appointments Values:</Text>
			<Text strong> ₹ 200</Text>
			<Bar data={data} options={options} />
		</Card>
	);
}

export default RecentSales;
