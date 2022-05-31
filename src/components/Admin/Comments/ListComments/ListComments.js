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
import AddCommentForm from "../AddCommentForm";

import "./ListComments.scss";

const { confirm } = ModalAntd;

export default function ListComments() {
  const [isVisible, setIsVisible] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState("");

  const addCommentModal = () => {
    setIsVisible(true);
    setTitleModal("Creando un nuevo Comentario");
    setContentModal(<AddCommentForm setIsVisible={setIsVisible} />);
  };

  const showDeleteCommentConfirm = () => {
    confirm({
      title: "Eliminando un Comentario",
      content: `¿Estas seguro de que quieres eliminar a este cometario?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
    });
  };

  return (
    <div className="list-comments">
      <div className="list-comments__header">
        <div className="list-comments__header__switch"></div>
        <Button type="primary" onClick={addCommentModal}>
          Nuevo Comentario
        </Button>
      </div>

      <CommentsActive
        setIsVisible={setIsVisible}
        setTitleModal={setTitleModal}
        setContentModal={setContentModal}
        showDeleteCommentConfirm={showDeleteCommentConfirm}
      />
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

function CommentsActive(props) {
  const {
    setIsVisible,
    setContentModal,
    setTitleModal,
    showDeleteCommentConfirm,
  } = props;

  const editComment = (comment) => {
    setIsVisible(true);
    setTitleModal(`Editar Comentario`);
    setContentModal(
      <AddCommentForm comment={comment} setIsVisible={setIsVisible} />
    );
  };

  return (
    <List
      className="comments-active"
      itemLayout="horizontal"
      dataSource={[1, 2, 3]}
      renderItem={(comment) => (
        <CommentActive
          comment={comment}
          editComment={editComment}
          showDeleteCommentConfirm={showDeleteCommentConfirm}
        />
      )}
    />
  );
}

function CommentActive(props) {
  const { comment, editComment, showDeleteCommentConfirm } = props;

  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => editComment(comment)}
          icon={<EditFilled />}
        />,
        <Button type="danger" icon={<StopFilled />} />,
        <Button
          type="danger"
          onClick={() => showDeleteCommentConfirm(comment)}
          icon={<DeleteFilled />}
        />,
      ]}
    >
      <List.Item.Meta
        title={"Nombre Comentario Activo"}
        description={"Comentario..."}
      />
    </List.Item>
  );
}
