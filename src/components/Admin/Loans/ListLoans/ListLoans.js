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
import AddLoanForm from "../AddLoanForm";

import "./ListLoans.scss";

const { confirm } = ModalAntd;

export default function ListLoans() {
  const [showLoansActive, setShowLoansActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState("");

  const addLoanModal = () => {
    setIsVisible(true);
    setTitleModal("Creando un nuevo Prestamo");
    setContentModal(<AddLoanForm setIsVisible={setIsVisible} />);
  };

  const showDeleteLoanConfirm = () => {
    confirm({
      title: "Eliminando un Prestamo",
      content: `¿Estas seguro de que quieres eliminar a este Prestamo?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
    });
  };

  return (
    <div className="list-loans">
      <div className="list-loans__header">
        <div className="list-loans__header__switch">
          <Switch
            defaultChecked
            onChange={() => setShowLoansActive(!showLoansActive)}
          />

          <span>
            {showLoansActive ? "PRESTAMOS ACTIVOS" : "PRESTAMOS INACTIVOS"}
          </span>
        </div>
        <Button type="primary" onClick={addLoanModal}>
          Nuevo Prestamo
        </Button>
      </div>

      {showLoansActive ? (
        <LoansActive
          setIsVisible={setIsVisible}
          setTitleModal={setTitleModal}
          setContentModal={setContentModal}
          showDeleteLoanConfirm={showDeleteLoanConfirm}
        />
      ) : (
        <LoansInactive
          setIsVisible={setIsVisible}
          setTitleModal={setTitleModal}
          setContentModal={setContentModal}
          showDeleteLoanConfirm={showDeleteLoanConfirm}
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

function LoansActive(props) {
  const {
    setIsVisible,
    setContentModal,
    setTitleModal,
    showDeleteLoanConfirm,
  } = props;

  const editLoan = (loan) => {
    setIsVisible(true);
    setTitleModal(`Editar Prestamo`);
    setContentModal(<AddLoanForm loan={loan} setIsVisible={setIsVisible} />);
  };

  return (
    <List
      className="loans-active"
      itemLayout="horizontal"
      dataSource={[1, 2, 3]}
      renderItem={(loan) => (
        <LoanActive
          loan={loan}
          editLoan={editLoan}
          showDeleteLoanConfirm={showDeleteLoanConfirm}
        />
      )}
    />
  );
}

function LoanActive(props) {
  const { loan, editLoan, showDeleteLoanConfirm } = props;

  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => editLoan(loan)}
          icon={<EditFilled />}
        />,
        <Button type="danger" icon={<StopFilled />} />,
        <Button
          type="danger"
          onClick={() => showDeleteLoanConfirm(loan)}
          icon={<DeleteFilled />}
        />,
      ]}
    >
      <List.Item.Meta
        title={"Nombre Prestamo Activo"}
        description={"Prestamo..."}
      />
    </List.Item>
  );
}

function LoansInactive(props) {
  const { showDeleteLoanConfirm } = props;
  return (
    <List
      className="loans-active"
      itemLayout="horizontal"
      dataSource={[1, 2, 3]}
      renderItem={(loan) => (
        <LoanInactive
          loan={loan}
          showDeleteLoanConfirm={showDeleteLoanConfirm}
        />
      )}
    />
  );
}

function LoanInactive(props) {
  const { loan, showDeleteLoanConfirm } = props;

  return (
    <List.Item
      actions={[
        <Button type="primary" icon={<CheckCircleFilled />} />,
        <Button
          type="danger"
          onClick={() => showDeleteLoanConfirm(loan)}
          icon={<DeleteFilled />}
        />,
      ]}
    >
      <List.Item.Meta
        title={"Nombre Prestamo Inactivo"}
        description={"Prestamo..."}
      />
    </List.Item>
  );
}
