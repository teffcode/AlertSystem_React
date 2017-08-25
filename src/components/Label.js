import React, { Component } from 'react';
import { Label as Labell, Icon } from 'semantic-ui-react';

const Label = ({ numberNotification }) => (
    <Labell
        color='red'
        size='large'
        style={{ width:'40px'}}
    >
        { numberNotification }
    </Labell>
);

export default Label;