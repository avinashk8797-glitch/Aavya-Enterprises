import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 my-4 border border-red-200 bg-red-50 rounded-xl text-center">
          <h3 className="font-poppins font-bold text-red-800 text-lg mb-2">
            Something went wrong rendering this section.
          </h3>
          <p className="font-inter text-red-600 text-sm">
            {this.state.error?.message || 'Unknown error'}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
