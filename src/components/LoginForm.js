import React from "react";
import "antd/dist/antd.css";

import { Form, Input, Button, Checkbox } from "antd";

function LoginForm(props) {
	const layout = {
		labelCol: {
			span: 8,
		},
		wrapperCol: {
			span: 24,
		},
	};
	const tailLayout = {
		wrapperCol: {
			offset: 8,
			span: 8,
		},
	};

	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			{...layout}
			name="basic"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label="Username"
				labelCol={{ span: 24 }}
				name="username"
				rules={[
					{
						required: true,
						message: "Please input your username!",
					},
				]}
			>
				<Input className="input" placeholder="Enter Username" />
			</Form.Item>

			<Form.Item
				label="Password"
				labelCol={{ span: 24 }}
				name="password"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
			>
				<Input className="input" placeholder="Enter Password" />
			</Form.Item>

			<Form.Item labelCol={{ span: 24 }}>
				<Button type="primary" block="true">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
}

export default LoginForm;
