import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import queryString from "query-string";

import Modal from "../../../components/Modal";
import IncidentList from "../../../components/Admin/Incident/IncidentList";
import Pagination from "../../../components/Admin/Pagination";
import AddEditIncidentForm from "../../../components/Admin/Incident/AddEditIncidentForm";

import { getIncidentsApi } from "../../../api/incident";

import "./Incidents.scss";

export default function Incidents() {
  const navigate = useNavigate();
  const location = useLocation();
  const [incidents, setIncidents] = useState(null);
  const [reloadIncidents, setReloadIncidents] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getIncidentsApi(12, page)
      .then((response) => {
        console.log(response);
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message,
          });
        } else {
          setIncidents(response?.incidentClassificationStored);
        }
      })
      .catch((err) => {
        notification["error"]({
          message: err.message + " : " + err,
        });
      })
      .finally(() => {
        setReloadIncidents(false);
      });
  }, [page, reloadIncidents]);

  const addIncident = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo Incidente");
    setModalContent(
      <AddEditIncidentForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadIncidents={setReloadIncidents}
        incident={null}
      />
    );
  };

  const editIncident = (incident) => {
    setIsVisibleModal(true);
    setModalTitle("Editar Incidente");
    setModalContent(
      <AddEditIncidentForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadIncidents={setReloadIncidents}
        incident={incident}
      />
    );
  };

  return (
    <div className="incidents">
      <div className="incidents__add-incident">
        <Button type="primary" onClick={addIncident}>
          Nuevo Incidente
        </Button>
      </div>
      {incidents && (
        <>
          <IncidentList
            incidents={incidents}
            setReloadIncidents={setReloadIncidents}
            editIncident={editIncident}
          />

          <Pagination
            data={incidents}
            location={location}
            navigate={navigate}
          />
        </>
      )}
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="50%"
      >
        {modalContent}
      </Modal>
    </div>
  );
}
