import { Container } from '@mui/material'
import React from 'react'
import { NavigationWrapper } from './styles'

interface NavigationProps {}
const Navigation: React.FC = (): React.ReactElement => {
  return (
    <Container maxWidth={'xl'}>
      <NavigationWrapper>
        <ul>
          <li>Neues</li>
          <li>Sets</li>
          <li>Inhaltstoffe</li>
          <li>Buisness</li>
        </ul>
      </NavigationWrapper>
    </Container>
  )
}

export default Navigation
