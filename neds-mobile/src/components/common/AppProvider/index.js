import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "@neds/components/common/ErrorBoundary";

const AppProvider = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
