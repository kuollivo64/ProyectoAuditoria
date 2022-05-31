import React from "react";

import ListComments from "../../../components/Admin/Comments/ListComments";

import "./Comments.scss";

export default function Comments() {
  return (
    <div className="comments">
      <ListComments />
    </div>
  );
}
