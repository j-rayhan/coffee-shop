import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

const withHeaderMenu = (ChildComponent: React.FC) =>
  // eslint-disable-next-line react/display-name
  class extends Component {
    render() {
      return <div>
        <Header />
        <ChildComponent {...this.props} />
        <Footer />
      </div>
    }

  };

export default withHeaderMenu;