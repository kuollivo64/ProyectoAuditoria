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
} from "@ant-design/icons";

import "./AddStudentForm.scss";

export default function AddStudentForm() {
  return (
    <div className="add-student-form">
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
            <Input type="text" prefix={<UserOutlined />} placeholder="ID" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Contraseña de Estudiante"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              type="text"
              prefix={<UserOutlined />}
              placeholder="Nombre de estudiante"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YY"
              placeholder="Fecha de nacimiento"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              type="text"
              prefix={<WhatsAppOutlined />}
              placeholder="Teléfono"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              type="email"
              prefix={<MailOutlined />}
              placeholder="Correo Electrónico"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item>
            <Select placeholder="Selecciona una Carrera">
              <Option value="ISI">Ingenieria en Sistemas Informáticos</Option>
              <Option value="MED">Medicina</Option>
              <Option value="LGS">Licenciatura en Gastronomía</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Estudiante
        </Button>
      </Form.Item>
    </Form>
  );
}
