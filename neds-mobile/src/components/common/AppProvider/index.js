import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import ErrorBoundary from "@neds/components/common/ErrorBoundary";
import store from "@neds/redux/store";

const AppProvider = ({ children }) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
