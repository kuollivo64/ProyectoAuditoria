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
import "./Incidentes.scss";
export default function Incidentes() {
  const [modal, setModal] = useState(false);
  const { Option } = Select;
  const abrirModal = () => {
    setModal(true);
  };
  const cerrarModal = () => {
    setModal(false);
  };
  const accion = () => {
    cerrarModal();
  };
  return (
    <div>
      <Button type="primary" onClick={abrirModal}>
        {" "}
        Nuevo Incidente
      </Button>

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
        <IncidentesForm />
      </Modal>
      <div className="table-incidente">
        <TablaIncidentes abrirModal={abrirModal} />
      </div>
    </div>
  );
}

const IncidentesForm = () => {
  return (
    <div className="add-edit-incident-form">
      <Form className="add-edit-incident-form__form" layout="inline">
        <Row gutter={24} style={{ width: "100%" }}>
          <Col span={12}>
            <Form.Item>
              <Input prefix={<FontSizeOutlined />} placeholder="Incidente" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Input prefix={<LinkOutlined />} placeholder="Descripción" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Select placeholder="Tipo de Incidente" className="select-inc">
              <Option value="TI">Tecnologia de la Información</Option>
              <Option value="SI">Seguridad de Información</Option>
            </Select>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const TablaIncidentes = (props) => {
  const { abrirModal } = props;
  const [data, setData] = useState([]);
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Clasificacion Incidente",
      dataIndex: "clasificacion_incidente",
      key: "clasificacion_incidente",
    },
    { title: "Descripcion", dataIndex: "descripcion", key: "descripcion" },
    { title: "Tipo", dataIndex: "tipo", key: "tipo" },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
      render: () => (
        <Button type="primary" onClick={abrirModal}>
          Editar
        </Button>
      ),
    },
  ];
  const datas = [
    {
      id: "asdasd",
      clasificacion_incidente: "asdasdas",
      descripcion: "agagagaga",
      tipo: "asdsad",
    },
    {
      id: "asdasd",
      clasificacion_incidente: "asdasdas",
      descripcion: "aggagaga",
      tipo: "asdsad",
    },
    {
      id: "asdasd",
      clasificacion_incidente: "asdasdas",
      descripcion: "asfgagaga",
      tipo: "asdsad",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={datas}></Table>
    </div>
  );
};
