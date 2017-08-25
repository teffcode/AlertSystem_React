import React, { Component } from 'react';
import { Menu as Menuu } from 'semantic-ui-react';

const Menu = ({ children }) => (
    <Menuu vertical>
        { children }
    </Menuu>
);

export default Menu;