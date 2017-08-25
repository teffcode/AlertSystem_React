import React, { Component } from 'react';

import Header from './components/HeaderModel';
import Search from './components/Search';
import Cards from './components/Cards';

import MenuContainer from './containers/MenuContainer';


class App extends Component {
  render() {

    return (
      <div>
      
        <Header>
          <Search/>
        </Header>
        <MenuContainer/>
      
      </div>
    );
  }
}

export default App;
