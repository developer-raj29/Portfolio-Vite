import React from "react";
import { Link } from "react-router-dom";

const FootLink = (props) => {
  const { path, icon, name } = props;

  return (
    <Link
      to={path}
      className="flex items-center font-bold sm:text-[16px] text-[14px] gap-2"
    >
      {icon} {name}
    </Link>
  );
};

export default FootLink;
