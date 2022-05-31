import React from "react";
import { List, Button, Modal, notification } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteIncidentApi } from "../../../../api/incident";

import "./IncidentList.scss";

const { confirm } = Modal;

export default function IncidentList(props) {
  const { incidents, setReloadIncidents, editIncident } = props;

  const deleteIncident = (incident) => {
    confirm({
      title: `Elimnando el Incidente ${incident.title}`,
      content: `¿Éstas Seguro de eliminar el Incidente ${incident.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteIncidentApi(incident._id)
          .then((response) => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message,
            });
            setReloadIncidents(true);
          })
          .catch((err) => {
            notification["error"]({
              message: "Error del servidor. " + err,
            });
          });
      },
    });
  };

  return (
    <div className="incident-list">
      <List
        dataSource={incidents.docs}
        renderItem={(incident) => (
          <Incident
            incident={incident}
            deleteIncident={deleteIncident}
            editIncident={editIncident}
          />
        )}
      />
    </div>
  );
}

function Incident(props) {
  const { incident, deleteIncident, editIncident } = props;

  return (
    <List.Item
      actions={[
        <Button type="primary">
          <EyeOutlined />
        </Button>,
        <Button type="primary" onClick={() => editIncident(incident)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deleteIncident(incident)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta title={incident._incidenteClassification} />
    </List.Item>
  );
}
