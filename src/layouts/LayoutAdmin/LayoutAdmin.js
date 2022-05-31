import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "antd";
import { map } from "lodash";
import MenuTop from "../../components/Admin/MenuTop";
import MenuSider from "../../components/Admin/MenuSider";
import SignIn from "../../pages/Admin/SignIn";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const { routes } = props;

  const { Header, Content, Footer } = Layout;

  const [menuCollapsed, setMenuCollapsed] = useState(false);

  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer" style={{ padding: 20 }}>
          Auditoría y Seguridad Informática | 2022
        </Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Routes>
      {map(routes, (item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            element={<item.element />}
          />
        );
      })}
    </Routes>
  );
}
