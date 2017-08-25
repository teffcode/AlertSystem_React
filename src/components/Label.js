import React, { Component } from 'react';
import { Label as Labell } from 'semantic-ui-react';

const Label = ({ numberNotification }) => (
    <Labell
        color='teal'
    >
    { numberNotification }
    </Labell>
);

export default Label;