import React from "react";
import ErrorScreen from "@neds/components/screens/ErrorScreen";

/**
 * Component for handling crashes and errors gracefully
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    // TODO add analytics logger
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorScreen />;
    }
    return children;
  }
}

export default ErrorBoundary;
