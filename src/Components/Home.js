import React, { Component } from 'react';

import Section1 from './Home/Section1';
import Section2 from './Home/Section2';
import Section3 from './Home/Section3';
import Section4 from './Home/Section4';
import Section5 from './Home/Section5';

const height = {
  height: '100%',
}

class Home extends Component {
  render() {
    return (
      <div style={height}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    );
  }
}

export default Home;
