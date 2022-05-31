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
import AddBookForm from "../AddBookForm";

import "./ListBooks.scss";

const { confirm } = ModalAntd;

export default function ListBooks() {
  const [showBooksActive, setShowBooksActive] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState("");

  const addBookModal = () => {
    setIsVisible(true);
    setTitleModal("Creando un nuevo Libro");
    setContentModal(<AddBookForm setIsVisible={setIsVisible} />);
  };

  const showDeleteBookConfirm = () => {
    confirm({
      title: "Eliminando un Libro",
      content: `¿Estas seguro de que quieres eliminar a este libro?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
    });
  };

  return (
    <div className="list-books">
      <div className="list-books__header">
        <div className="list-books__header__switch">
          <Switch
            defaultChecked
            onChange={() => setShowBooksActive(!showBooksActive)}
          />

          <span>{showBooksActive ? "LIBROS ACTIVOS" : "LIBROS INACTIVOS"}</span>
        </div>
        <Button type="primary" onClick={addBookModal}>
          Nuevo Libro
        </Button>
      </div>

      {showBooksActive ? (
        <BooksActive
          setIsVisible={setIsVisible}
          setTitleModal={setTitleModal}
          setContentModal={setContentModal}
          showDeleteBookConfirm={showDeleteBookConfirm}
        />
      ) : (
        <BooksInactive
          setIsVisible={setIsVisible}
          setTitleModal={setTitleModal}
          setContentModal={setContentModal}
          showDeleteBookConfirm={showDeleteBookConfirm}
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

function BooksActive(props) {
  const {
    setIsVisible,
    setContentModal,
    setTitleModal,
    showDeleteBookConfirm,
  } = props;

  const editBook = (book) => {
    setIsVisible(true);
    setTitleModal(`Editar Libro`);
    setContentModal(<AddBookForm book={book} setIsVisible={setIsVisible} />);
  };

  return (
    <List
      className="books-active"
      itemLayout="horizontal"
      dataSource={[1, 2, 3]}
      renderItem={(book) => (
        <BookActive
          book={book}
          editBook={editBook}
          showDeleteBookConfirm={showDeleteBookConfirm}
        />
      )}
    />
  );
}

function BookActive(props) {
  const { book, editBook, showDeleteBookConfirm } = props;

  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={() => editBook(book)}
          icon={<EditFilled />}
        />,
        <Button type="danger" icon={<StopFilled />} />,
        <Button
          type="danger"
          onClick={() => showDeleteBookConfirm(book)}
          icon={<DeleteFilled />}
        />,
      ]}
    >
      <List.Item.Meta
        title={"Nombre de Libro Activo"}
        description={"Autor..."}
      />
    </List.Item>
  );
}

function BooksInactive(props) {
  const { showDeleteBookConfirm } = props;
  return (
    <List
      className="books-active"
      itemLayout="horizontal"
      dataSource={[1, 2, 3]}
      renderItem={(book) => (
        <BookInactive
          book={book}
          showDeleteBookConfirm={showDeleteBookConfirm}
        />
      )}
    />
  );
}

function BookInactive(props) {
  const { book, showDeleteBookConfirm } = props;

  return (
    <List.Item
      actions={[
        <Button type="primary" icon={<CheckCircleFilled />} />,
        <Button
          type="danger"
          onClick={() => showDeleteBookConfirm(book)}
          icon={<DeleteFilled />}
        />,
      ]}
    >
      <List.Item.Meta
        title={"Nombre de Libro Inactivo"}
        description={"Autor..."}
      />
    </List.Item>
  );
}
