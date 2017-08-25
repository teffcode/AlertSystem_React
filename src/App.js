import React, { Component } from 'react';

import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Label from './components/Label';
import MenuContainer from './containers/MenuContainer';
import Grid from './components/Grid';

import { Segment } from 'semantic-ui-react';

class App extends Component {

  render() {

    return (
      <div>
          <MenuContainer/>
      </div>
    );
  }
}

export default App;
