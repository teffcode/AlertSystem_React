import React, { Component } from 'react';

import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import Label from './components/Label';

class App extends Component {

  constructor(){
    super();

    this.state = ({
      activeItem: 'Cliente 1',
    })
  }

  handleItemClick = () => (
    this.setState({
      activeItem: name,
    })
  );

  render() {
    return (
      <div>
        Hola_mundo

        <Menu>
          <MenuItem 
            nameItemMenu="Grupo Éxito"
            activeItemMenu={activeItem === "Grupo Éxito"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="1" 
            />
          </MenuItem>
        </Menu>

      </div>
    );
  }
}

export default App;
