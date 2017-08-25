import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const HeaderModel = ({children}) => (
  <Segment clearing>
    <Header floated='left'size='small'>
      {children}
    </Header>
    <Header as='h1' textAlign='center' floated='right' >
      Nighty
    </Header>
  </Segment>
)

export default HeaderModel;