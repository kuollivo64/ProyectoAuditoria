import React from "react";

import ListLoans from "../../../components/Admin/Loans/ListLoans";

import "./Loans.scss";

export default function Loans() {
  return (
    <div className="loans">
      <ListLoans />
    </div>
  );
}
