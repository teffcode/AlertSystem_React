import React, { Component } from 'react';
import { Menu as Menuu } from 'semantic-ui-react';

const MenuItem = ({ children, handleItemClick, nameItemMenu }) => (
    <Menuu.Item 
        name='inbox' 
        onClick={ handleItemClick }
    >
        { children }
        { nameItemMenu }

    </Menuu.Item>
);

export default MenuItem;