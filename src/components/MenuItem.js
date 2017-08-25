import React, { Component } from 'react';
import { Menu as Menuu } from 'semantic-ui-react';

const MenuItem = ({ nameItemMenu, activeItemMenu, handleItemClick, children }) => (
    <Menuu.Item 
        name={ nameItemMenu }
        active={ activeItemMenu }
        onClick={ handleItemClick }
    >
        { children }
        { nameItemMenu }

    </Menuu.Item>
);

export default MenuItem;