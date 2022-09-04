import styled from '@emotion/styled'

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;

  & .displayed-price {
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
  & .displayed-tax {
    font-size: 0.65rem;
    font-weight: light;
    margin-top: -4px;
  }
`
