import React, { useState } from "react";
import {
  Modal,
  Table,
  Row,
  Col,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  notification,
} from "antd";
import {
  FontSizeOutlined,
  LinkOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import "./Criticidad.scss";
export default function Criticidad() {
  return (
    <div>
      <div className="scrollable-container">
        <TablaCausas />
      </div>
    </div>
  );
}

const TablaCausas = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const abrirModal = () => {
    setModal(true);
  };
  const cerrarModal = () => {
    setModal(false);
  };
  const accion = () => {
    cerrarModal();
  };

  const dataset = [
    {
      nivel: "asdas",
      clasificacion: "asdasd",
      impacto_criticidad: "asdasd",
    },
    {
      nivel: "asdas",
      clasificacion: "asdasd",
      impacto_criticidad: "asdasd",
    },
    {
      nivel: "asdas",
      clasificacion: "asdasd",
      impacto_criticidad: "asdasd",
    },
  ];
  const columns = [
    { title: "Nivel", dataIndex: "nivel", key: "nivel" },
    {
      title: "Clasificacion",
      dataIndex: "clasificacion",
      key: "clasificacion",
    },
    {
      title: "Impacto/Criticidad",
      dataIndex: "impacto_criticidad",
      key: "impacto_criticidad",
    },
    {
      title: "Acciones",
      key: "acciones",
      render: () => (
        <Button type="primary" onClick={abrirModal}>
          Editar
        </Button>
      ),
    },
  ];

  return (
    <div className="scroll-container">
      <Modal
        title="Incidente"
        visible={modal}
        onCancel={cerrarModal}
        onOk={accion}
        footer={[
          <Button onClick={abrirModal} type="primary">
            Agregar
          </Button>,
          <Button onClick={cerrarModal} type="primary" danger>
            Cancelar
          </Button>,
        ]}
      >
        <FormCriticidad />
      </Modal>
      <Table columns={columns} dataSource={dataset}></Table>
    </div>
  );
};

const FormCriticidad = () => {
  return (
    <div className="add-edit-incident-form">
      <Form className="add-edit-incident-form__form" layout="inline">
        <Row gutter={24} style={{ width: "100%" }}>
          <Col span={12}>
            <Form.Item>
              <Input prefix={<FontSizeOutlined />} placeholder="Nivel" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Input prefix={<LinkOutlined />} placeholder="Clasificacion" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Input
                prefix={<LinkOutlined />}
                placeholder="Impacto/Criticidad"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
