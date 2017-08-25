import React from 'react';
import { Grid as Gridd, Image, Rail, Segment } from 'semantic-ui-react'

const Grid = ({ children }) => (
    <Gridd centered columns={2} divided>

        <Gridd.Column width={3}>
            { children }
        </Gridd.Column>

        <Gridd.Column width={12}>

            <Gridd.Column width={3}>
            Hola
            </Gridd.Column>

            <Gridd.Column width={3}>
            </Gridd.Column>

            <Gridd.Column width={3}>
            </Gridd.Column>
        </Gridd.Column>
        
    </Gridd>
);

export default Grid;