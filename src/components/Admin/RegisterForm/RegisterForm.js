import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { map } from "lodash";

import "./RegisterForm.scss";

export default function RegisterForm() {
  const [formData, setFormData] = useState(defaultFormData());

  const [formValid, setFormValid] = useState(defaultFormValid());

  const onChange = (e) => {
    if (e.target.name === "privacyPolicy") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {};

  const inputValidation = (e) => {};

  return (
    <Form
      className="register-form"
      onChange={onChange}
      onSubmitCapture={onSubmit}
    >
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="register-form__input"
          onChange={inputValidation}
          value={formData.email}
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={formData.password}
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={formData.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          checked={formData.privacyPolicy}
          onChange={inputValidation}
        >
          He leído y acepto la política de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear Cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}

function defaultFormData() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  };
}

function defaultFormValid() {
  return {
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  };
}
