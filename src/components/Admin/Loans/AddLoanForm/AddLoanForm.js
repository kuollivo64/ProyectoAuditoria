import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  DatePicker,
  notification,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  WhatsAppOutlined,
  ReadOutlined,
  CalendarOutlined,
  BookOutlined,
} from "@ant-design/icons";

import "./AddLoanForm.scss";

export default function AddLoanForm() {
  return (
    <div className="add-loan-form">
      <AddForm />
    </div>
  );
}

function AddForm() {
  const { Option } = Select;

  return (
    <Form className="form-add">
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input type="text" prefix={<BookOutlined />} placeholder="Titulo" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input prefix={<UserOutlined />} placeholder="Estudiante" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YY"
              placeholder="Fecha de Entrega"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YY"
              placeholder="Fecha de Devolución"
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Prestamo
        </Button>
      </Form.Item>
    </Form>
  );
}
