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
import { CommentOutlined } from "@ant-design/icons";

import "./AddCommentForm.scss";

export default function AddCommentForm() {
  return (
    <div className="add-comment-form">
      <AddForm />
    </div>
  );
}

function AddForm() {
  const { Option } = Select;

  return (
    <Form className="form-add">
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item>
            <Input
              type="text"
              prefix={<CommentOutlined />}
              placeholder="Comentario"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item>
            <Select placeholder="Selecciona un Libro">
              <Option value="1">Libro 1</Option>
              <Option value="2">Libro 2</Option>
              <Option value="3">Libro 3</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Comentario
        </Button>
      </Form.Item>
    </Form>
  );
}
