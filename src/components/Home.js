import React from "react";
import { Row, Col, Space } from "antd";

import RecentSales from "../Dashboard/recentsales";
import ComingAppoinment from "../Dashboard/comingAppoinments";
import TodaysAppoinment from "../Dashboard/todayAppoinment";
import AppoinmentActivities from "../Dashboard/appoinmentActivities";
import Services from "../Dashboard/services";
import Employees from "../Dashboard/employee";

function DashboardPage() {
	return (
		<>
			<Space direction="vertical" size="large" style={{ width: "100%" }}>
				<Row gutter={24}>
					<Col xs={24} sm={24} md={24} lg={12}>
						<RecentSales />
					</Col>
					<Col xs={24} sm={24} md={24} lg={12}>
						<ComingAppoinment />
					</Col>
				</Row>

				<Row gutter={24}>
					<Col xs={24} sm={24} md={24} lg={12}>
						<AppoinmentActivities />
					</Col>
					<Col xs={24} sm={24} md={24} lg={12}>
						<TodaysAppoinment />
					</Col>
				</Row>
				<Row gutter={24}>
					<Col xs={24} sm={24} md={24} lg={12}>
						<Services />
					</Col>
					<Col xs={24} sm={24} md={24} lg={12}>
						<Employees />
					</Col>
				</Row>
			</Space>
		</>
	);
}

export default DashboardPage;
