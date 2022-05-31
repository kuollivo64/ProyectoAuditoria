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
  BookOutlined,
  CommentOutlined,
  TagOutlined,
} from "@ant-design/icons";

import "./AddBookForm.scss";

export default function AddBookForm() {
  return (
    <div className="add-book-form">
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
            <Input type="text" prefix={<UserOutlined />} placeholder="Autor" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              type="text"
              prefix={<BookOutlined />}
              placeholder="Editorial"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select placeholder="Selecciona una Categoría">
              <Option value="terror">Terror</Option>
              <Option value="drama">Drama</Option>
              <Option value="comedy">Comedia</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input type="text" prefix={<TagOutlined />} placeholder="Estado" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              type="text"
              prefix={<CommentOutlined />}
              placeholder="Comentarios"
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Libro
        </Button>
      </Form.Item>
    </Form>
  );
}
