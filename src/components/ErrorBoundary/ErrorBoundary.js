import React from 'react';
import axios from 'axios';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: {} };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorMessage: { title: 'Application error!', message: error.message}
    })
  }

  componentDidMount() {
    this.responseInterceptor = axios.interceptors.response.use(
      response => {
        if (response.data.success) {
          this.setState({ hasError: false, errorMessage: {} });
          return response.data;
        }

        // Show error message received from the API
        this.setState({
          hasError: true,
          errorMessage: { title: 'Network error!', message: response.data.error}
        })
      },
      error => {
        this.setState({
          hasError: true,
          errorMessage: {
            title: 'Network error!',
            message: "Failed to get data from the server. Check your internet connection."
          }
        });
      }
    );    
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage
          title={this.state.errorMessage.title}
          message={this.state.errorMessage.message}
        />
      );
    }
    return this.props.children; 
  }
}

export default ErrorBoundary;