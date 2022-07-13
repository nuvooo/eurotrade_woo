import * as React from 'react'
import { FooterWrapper } from './styles'

interface FooterProps {
  logo?: string
  title?: string
}

const Footer: React.FC<FooterProps> = ({ title, logo }): React.ReactElement => {
  return <FooterWrapper>{title}</FooterWrapper>
}

export default Footer
