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
  Divider,
  Typography,
} from "antd";
import {
  FontSizeOutlined,
  LinkOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import "./CausaIncidente.scss";
const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;
export default function CausaIncidente() {
  return (
    <div>
      <Title>Causas de Seguridad Información</Title>
      <div className="scrollable-container">
        <TablaCausas />
      </div>
    </div>
  );
}

const CausasForm = () => {
  return (
    <div className="add-edit-incident-form">
      <Form className="add-edit-incident-form__form" layout="inline">
        <Row gutter={24} style={{ width: "100%" }}>
          <Col span={24}>
            <Select placeholder="Tipo de Incidente" className="select-cau">
              <Option value="TI">Tecnologia de la Información</Option>
              <Option value="SI">Seguridad de Información</Option>
            </Select>
          </Col>
          <Col span={24}>
            <Select placeholder="Incidente" className="select-cau">
              <Option value="TI">Tecnologia de la Información</Option>
              <Option value="SI">Seguridad de Información</Option>
            </Select>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Input
                prefix={<FontSizeOutlined />}
                placeholder="Causa de Ocurrencia"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <TextArea
                rows={4}
                prefix={<FontSizeOutlined />}
                placeholder="Medida Preventiva"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <TextArea
                rows={4}
                prefix={<LinkOutlined />}
                placeholder="Medida Reactiva"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const TablaCausas = () => {
  const [data, setData] = useState([]);
  const dataset = [
    {
      id: "asdas",
      tipo_incidente: "asdasd",
      posibles_causas_de_ocurrencia: "asdasd",
      medidad_preventivas: "asdasd",
      medidad_reactivas: "asdasdsa",
    },
    {
      id: "asdas",
      tipo_incidente: "asdasd",
      posibles_causas_de_ocurrencia: "asdasd",
      medidad_preventivas: "asdasd",
      medidad_reactivas: "asdasdsa",
    },
  ];
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "TIPO DE INCIDENTE",
      dataIndex: "tipo_incidente",
      key: "tipo_incidente",
    },
    {
      title: "POSIBLES CAUSAS DE OCURRENCIA",
      dataIndex: "posibles_causas_de_ocurrencia",
      key: "posibles_causas_de_ocurrencia",
    },
    {
      title: "MEDIDAD PREVENTIVAS",
      key: "medidad_preventivas",
      render: () => <SubTabla></SubTabla>,
    },
    {
      title: "MEDIDAD REACTIVAS",
      key: "medidad_reactivas",
      render: () => <SubTabla></SubTabla>,
    },
  ];

  return (
    <div className="scroll-container">
      <Table columns={columns} dataSource={dataset}></Table>
    </div>
  );
};

const SubTabla = () => {
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
      nro: "1",
      descripcion: "asdasd",
    },
    {
      nro: "2",
      descripcion: "asdasd",
    },
    {
      nro: "3",
      descripcion: "asdasd",
    },
  ];
  const columns = [
    { title: "Nro", dataIndex: "nro", key: "nro" },
    {
      title: "Descripcion",
      dataIndex: "descripcion",
      key: "descripcion",
    },
    {
      title: "Accion",
      key: "acciones",
      render: () => (
        <Button type="primary" onClick={abrirModal}>
          Editar
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Modal
        title="Causas"
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
        <CausasForm />
      </Modal>
      <Table pagination={false} columns={columns} dataSource={dataset}></Table>
      <Button type="primary" style={{ width: "100%" }} onClick={abrirModal}>
        Agregar
      </Button>
    </div>
  );
};
