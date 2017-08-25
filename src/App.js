import React, { Component } from 'react';

import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Label from './components/Label';
import Header from './components/HeaderModel';
import Search from './components/Search';
import Cards from './components/Cards';


class App extends Component {

  constructor(){
    super();

    this.state = ({
      activeItem: 'Cliente 1',
    })
  }

  handleItemClick = () => (
    this.setState({
      activeItem: "name",
    })
  );

  render() {
    return (
      <div>
        <Header>
          <Search/>
        </Header>
        <Cards cliente={"Gana"} titulo={"Revision"} cluster={"CLU_INT"} component={"proxyService"} />
          
        Hola_mundo

        <Menu>
          <MenuItem nameItemMenu="Inbox">
            <Label numberNotification="1" handleItemClick={this.handleItemClick}/>
          </MenuItem>
        </Menu>
       
      
      </div>
    );
  }
}

export default App;
