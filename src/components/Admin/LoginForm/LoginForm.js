import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./LoginForm.scss";

export default function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(defaultFormData());

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    notification["success"]({
      message: "Bienvenido!",
    });

    navigate(0);
  };

  return (
    <Form className="login-form" onSubmitCapture={onSubmit} onChange={onChange}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Correo Electrónico"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          ENTRAR
        </Button>
      </Form.Item>
    </Form>
  );
}

function defaultFormData() {
  return {
    email: "",
    password: "",
  };
}
