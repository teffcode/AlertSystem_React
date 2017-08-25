import React, { Component } from 'react';
import { Menu as Menuu } from 'semantic-ui-react';

const Menu = ({ children }) => (
    <Menuu vertical pointing>
        { children }
    </Menuu>
);

export default Menu;