import React from "react";

// Layouts
import LayoutAdmin from "../layouts/LayoutAdmin";

//Admin Pages
import Incidents from "../pages/Auditoria/ClasificacionIncidentes";
import Causes from "../pages/Auditoria/CausasIncidentes";
import Criticality from "../pages/Auditoria/NivelIncidentes";
import PlanContigencia from "../pages/Auditoria/PlanContigencia";
//ERROR404
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/*",
    element: LayoutAdmin,
    exact: true,
    routes: [
      {
        path: "/incidents",
        element: Incidents,
        exact: true,
      },
      {
        path: "/causes",
        element: Causes,
        exact: true,
      },
      {
        path: "/criticality",
        element: Criticality,
        exact: true,
      },
      {
        path: "/plan-continuity",
        element: PlanContigencia,
        exact: true,
      },
      {
        path: "*",
        element: Error404,
        exact: true,
      },
    ],
  },
];

export default routes;
