import styled from 'styled-components'
import { LayoutProps } from '.'
import { createGlobalStyle } from 'styled-components'

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props: LayoutProps) =>
    props.mode !== 'dark'
      ? props.lightBackgroundColor
      : props.darkBackgroundColor};
  color: ${(props: LayoutProps) =>
    props.mode !== 'dark' ? props.mainColor : props.contrastColor};
`

export const GlobalStyle = createGlobalStyle`
html {
  font-size:16px;
}

body {
    margin: 0px;
    padding: 0px;
    color:#171717;
  font-family: 'Montserrat', sans-serif;
  background: ${(props: LayoutProps) =>
    props.mode !== 'dark'
      ? props.lightBackgroundColor
      : props.darkBackgroundColor};
    color: ${(props: LayoutProps) =>
      props.mode !== 'dark' ? props.mainColor : props.contrastColor};
}
`
