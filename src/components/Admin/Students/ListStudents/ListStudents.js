import React, { useState, useEffect } from "react";
import {
  Switch,
  List,
  Avatar,
  Button,
  notification,
  Modal as ModalAntd,
} from "antd";
import {
  EditFilled,
  StopFilled,
  DeleteFilled,
  CheckCircleFilled,
} from "@ant-design/icons";

import Modal from "../../../Modal";
import AddStudentForm from "../AddStudentForm";

import "./ListStudents.scss";

const { confirm } = ModalAntd;

export default function ListStudents() {
  const [showStudentsActive, setShowStudentsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState("");

  const addStudentModal = () => {
    setIsVisible(true);
    setTitleModal("Creando un nuevo Estudiante");
    setContentModal(<AddStudentForm setIsVisible={setIsVisible} />);
  };

  const showDeleteStudentConfirm = () => {
    confirm({
      title: "Eliminando un Usuario",
      content: `¿Estas seguro de que quieres eliminar a este estudiante?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
    });
  };

  return (
    <div className="list-students">
      <div className="list-students__header">
        <div className="list-students__header__switch">
          <Switch
            defaultChecked
            onChange={() => setShowStudentsActive(!showStudentsActive)}
          />

          <span>
            {showStudentsActive ? "USUARIOS ACTIVOS" : "USUARIOS INACTIVOS"}
          </span>
        </div>
        <Button type="primary" onClick={addStudentModal}>
          Nuevo Estudiante
        </Button>
      </div>

      {showStudentsActive ? (
        <StudentsActive
          setIsVisible={setIsVisible}
          setTitleModal={setTitleModal}
          setContentModal={setContentModal}
          showDeleteStudentConfirm={showDeleteStudentConfirm}
        />
      ) : (
        <StudentsInactive
          setIsVisible={setIsVisible}
          setTitleModal={setTitleModal}
          setContentModal={setContentModal}
          showDeleteStudentConfirm={showDeleteStudentConfirm}
        />
      )}
      <Modal
        title={titleModal}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      >
        {contentModal}
      </Modal>
    </div>
  );
}

function StudentsActive(props) {
  const {
    setIsVisible,
    setContentModal,
    setTitleModal,
    showDeleteStudentConfirm,
  } = props;

  const editStudent = (student) => {
    setIsVisible(true);
    setTitleModal(`Editar Estudiante`);
    setContentModal(
      <AddStudentForm student={student} setIsVisible={setIsVisible} />
    );
  };

  return (
    <List
      className="students-active"
      itemLayout="horizontal"
      dataSource={[1, 2, 3]}
      renderItem={(student) => (
        <StudentActive
          student={student}
          editStudent={editStudent}
          showDeleteStudentConfirm={showDeleteStudentConfirm}
        />
      )}
    />
  );
}

function StudentActive(props) {
  const { student, editStudent, showDeleteStudentConfirm } = props;

  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => editStudent(student)}
          icon={<EditFilled />}
        />,
        <Button type="danger" icon={<StopFilled />} />,
        <Button
          type="danger"
          onClick={() => showDeleteStudentConfirm(student)}
          icon={<DeleteFilled />}
        />,
      ]}
    >
      <List.Item.Meta
        title={"Nombre Estudiante Activo"}
        description={"Estudiante..."}
      />
    </List.Item>
  );
}

function StudentsInactive(props) {
  const { showDeleteStudentConfirm } = props;
  return (
    <List
      className="students-active"
      itemLayout="horizontal"
      dataSource={[1, 2, 3]}
      renderItem={(student) => (
        <StudentInactive
          student={student}
          showDeleteStudentConfirm={showDeleteStudentConfirm}
        />
      )}
    />
  );
}

function StudentInactive(props) {
  const { student, showDeleteStudentConfirm } = props;

  return (
    <List.Item
      actions={[
        <Button type="primary" icon={<CheckCircleFilled />} />,
        <Button
          type="danger"
          onClick={() => showDeleteStudentConfirm(student)}
          icon={<DeleteFilled />}
        />,
      ]}
    >
      <List.Item.Meta
        title={"Nombre Estudiante Inactivo"}
        description={"Estudiante..."}
      />
    </List.Item>
  );
}
