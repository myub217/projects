import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HomePage from "./HomePage";

const IndexPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return <HomePage router={{ navigate, location }} />;
};

export default IndexPage;