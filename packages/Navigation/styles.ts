import styled from '@emotion/styled'

export const NavigationWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -36px;
  margin-bottom: 36px;
  & ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    & li {
      margin-left: 12px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      background: #ffffff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
      padding: 12px 26px;
      border-radius: 40px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
`
