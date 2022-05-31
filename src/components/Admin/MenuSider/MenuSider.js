import React from "react";

import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  HomeFilled,
  MenuOutlined,
  UserOutlined,
  BookOutlined,
  TableOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import "./MenuSider.scss";

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  const location = useLocation();

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        theme="dark"
      >
        <Menu.Item key={"/incidents"}>
          <Link to="/incidents">
            <HomeFilled />{" "}
            <span className="menu-sider__nav-text">
              Clasificacion de Incidents
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key={"/causes"}>
          <Link to="/causes">
            <MenuOutlined />{" "}
            <span className="menu-sider__nav-text">Causas TI/SI</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={"/criticality"}>
          <Link to="/criticality">
            <BookOutlined />{" "}
            <span className="menu-sider__nav-text">Criticidades</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={"/plan-continuity"}>
          <Link to="/plan-continuity">
            <TableOutlined />{" "}
            <span className="menu-sider__nav-text">Plan de Continuidad</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
