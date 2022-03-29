import React, { Component } from 'react';
import Header from './header';

const withHeaderMenu = (ChildComponent: React.FC) =>
  // eslint-disable-next-line react/display-name
  class extends Component {
    render() {
      return <div>
        <Header />
        <ChildComponent {...this.props} />
      </div>
    }

  };

export default withHeaderMenu;