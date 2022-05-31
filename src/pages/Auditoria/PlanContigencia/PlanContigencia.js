import React, { useState } from "react";
import {
  Modal,
  Table,
  Row,
  Col,
  Radio,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  notification,
  Divider,
  Typography,
} from "antd";
import {
  FontSizeOutlined,
  LinkOutlined,
  SolutionOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import "./PlanContigencia.scss";
const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;
export default function PlanContigencia() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <div>
      <Title>Plan de Contingencia</Title>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMarkValue: requiredMark,
        }}
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Form.Item label="Escoja una Opción" name="requiredMarkValue">
          <Radio.Group>
            <Radio.Button value="obligatorio">
              Seguridad de Información
            </Radio.Button>
            <Radio.Button value>Tecnologia de Información</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary">Ver Plan de Contigencia</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
