import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import CardsCss from '/Users/davidcortes/Documents/React/AlertSystem_React/src/css/Cards.css'

const Cards = ({cliente, titulo, cluster, component}) => (
    <Card> 
        <Card.Content>
            <Card.Header className="CardHeader">
                {cliente}
            </Card.Header>
            <Card.Description>
                Titulo: {titulo}
                <br/>
                Tluster: {cluster}
                <br/>
                Tomponent: {component}
            </Card.Description>
        </Card.Content>
    </Card>

);

export default Cards;