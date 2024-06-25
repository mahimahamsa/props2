import React, { Component } from 'react';
import DataComponent from './Components/DataComponent.jsx';

class AppClass extends Component {
  render() {
    const data = DataComponent();

    return (
      <div>
        {/* Your JSX using the 'data' received as props */}
      </div>
    );
  }
}

export default AppClass;