import React from "react";
import { Pagination as PaginationAntd } from "antd";

import "./Pagination.scss";

export default function Pagination(props) {
  const { data, location, navigate } = props;
  const currentPage = parseInt(data.page);
  const totalData = parseInt(data.totalDocs);
  const limitData = parseInt(data.limit);

  const onChangePage = (newPage) => {
    navigate(`${location.pathname}?page=${newPage}`);
  };

  return (
    <PaginationAntd
      defaultCurrent={currentPage}
      total={totalData}
      pageSize={limitData}
      onChange={(newPage) => onChangePage(newPage)}
      className="pagination"
    />
  );
}
