import React, { useState, useEffect } from "react";
import {
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
import moment from "moment";
import { addIncidentApi, updateIncidentApi } from "../../../../api/incident";

import "./AddEditIncidentForm.scss";

export default function AddEditIncidentForm(props) {
  const { setIsVisibleModal, setReloadIncidents, incident } = props;
  const [incidentData, setIncidentData] = useState({});

  useEffect(() => {
    if (incident) {
      setIncidentData(incident);
    } else {
      setIncidentData({});
    }
  }, [incident]);

  const processIncident = (e) => {
    const { _incidenteClassification, description } = incidentData;

    if (!_incidenteClassification || !description) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      if (!incident) {
        addIncident();
      } else {
        updateIncident();
      }
    }
  };

  const addIncident = () => {
    addIncidentApi(incidentData)
      .then((response) => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message,
        });
        setIsVisibleModal(false);
        // setIncidentData({});
      })
      .catch((err) => {
        notification["error"]({
          message: "Ocurrió un error inesperado." + err,
        });
      })
      .finally(() => {
        setReloadIncidents(true);
      });
  };

  const updateIncident = () => {
    updateIncidentApi(incident._id, incidentData)
      .then((response) => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message,
        });
        setIsVisibleModal(false);
      })
      .catch((err) => {
        notification["error"]({
          message: "Ocurrio un error inesperado." + err,
        });
      })
      .finally(() => {
        setReloadIncidents(true);
      });
  };

  return (
    <div className="add-edit-incident-form">
      <AddEditForm
        incidentData={incidentData}
        setIncidentData={setIncidentData}
        incident={incident}
        processIncident={processIncident}
      />
    </div>
  );
}

function AddEditForm(props) {
  const { incidentData, setIncidentData, incident, processIncident } = props;
  const { Option } = Select;
  return (
    <Form
      className="add-edit-incident-form__form"
      layout="inline"
      onSubmitCapture={processIncident}
    >
      <Row gutter={24} style={{ width: "100%" }}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<FontSizeOutlined />}
              placeholder="Incidente"
              value={incidentData._incidenteClassification}
              onChange={(e) =>
                setIncidentData({
                  ...incidentData,
                  _incidenteClassification: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<LinkOutlined />}
              placeholder="Descripción"
              value={incidentData.description}
              onChange={(e) =>
                setIncidentData({
                  ...incidentData,
                  description: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Select placeholder="Tipo de Incidente" className="select-inc">
            <Option value="TI">Tecnologia de la Información</Option>
            <Option value="SI">Seguridad de Información</Option>
          </Select>
        </Col>
        <Col span={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="btn-submit">
              {incident ? "Actualizar Incidente" : "Crear Incidente"}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}
