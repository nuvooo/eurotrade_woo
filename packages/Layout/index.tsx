import * as React from 'react'
import { GlobalStyle, LayoutWrapper } from './styles'

export interface LayoutProps {
  mode?: 'dark' | 'light'
  darkBackgroundColor?: string
  lightBackgroundColor?: string
  mainColor?: string
  contrastColor?: string
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = ({
  children,
  darkBackgroundColor = '#111',
  lightBackgroundColor = '#f9f9f9',
  mainColor = '#111',
  contrastColor = '#fff',
  mode = 'dark',
}): React.ReactElement => {
  return (
    <>
      <GlobalStyle
        mode={mode}
        lightBackgroundColor={lightBackgroundColor}
        darkBackgroundColor={darkBackgroundColor}
        mainColor={mainColor}
        contrastColor={contrastColor}
      />
      <LayoutWrapper
        mode={mode}
        lightBackgroundColor={lightBackgroundColor}
        darkBackgroundColor={darkBackgroundColor}
        mainColor={mainColor}
        contrastColor={contrastColor}
      >
        {children}
      </LayoutWrapper>
    </>
  )
}

export default Layout
