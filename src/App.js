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

  handleItemClick = (e, {name}) => (
    this.setState({
      activeItem: name,
    })
  );

  render() {

    const { activeItem } = this.state

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

          <MenuItem 
            nameItemMenu="Seti"
            activeItemMenu={activeItem === "Seti"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="4" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="SOS"
            activeItemMenu={activeItem === "SOS"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="3" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Grupo Uribe"
            activeItemMenu={activeItem === "Grupo Uribe"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="0" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Zona Franca"
            activeItemMenu={activeItem === "Zona Franca"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="7" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Gas Natural"
            activeItemMenu={activeItem === "Gas Natural"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="2" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Gana"
            activeItemMenu={activeItem === "Gana"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="10" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="La Riviera"
            activeItemMenu={activeItem === "La Riviera"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="8" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Cliente 1"
            activeItemMenu={activeItem === "Cliente 1"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="1" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Cliente 2"
            activeItemMenu={activeItem === "Cliente 2"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="4" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Cliente 3"
            activeItemMenu={activeItem === "Cliente 3"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="3" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Cliente 4"
            activeItemMenu={activeItem === "Cliente 4"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="0" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Cliente 5"
            activeItemMenu={activeItem === "Cliente 5"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="7" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Cliente 6"
            activeItemMenu={activeItem === "Cliente 6"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="2" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Cliente 7"
            activeItemMenu={activeItem === "Cliente 7"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="10" 
            />
          </MenuItem>

          <MenuItem 
            nameItemMenu="Cliente 8"
            activeItemMenu={activeItem === "Cliente 8"}
            handleItemClick={this.handleItemClick}
          >
            <Label 
              numberNotification="8" 
            />
          </MenuItem>
        </Menu>

      </div>
    );
  }
}

export default App;
