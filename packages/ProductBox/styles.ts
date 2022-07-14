import styled from '@emotion/styled'
import Image from 'next/image'

export const ProductBoxWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  padding: 12px;
  cursor: pointer;
`

export const ProductBoxTitle = styled.div`
  font-size: 1.2rem;
  line-height: 1.25rem;
  font-weight: bold;
  display: flex;
`

export const ProductBoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 1rem;

  & .displayed-price {
    font-size: 1rem;
    margin-right: 4px;
    line-height: 1.25rem;
    font-weight: 600;
  }
  & .displayed-tax {
    margin-top: 0.2rem;
    font-size: 0.65rem;
    font-weight: light;
    margin-top: -2px;
  }
`

export const ProductBoxBanner = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  flex-wrap: wrap;
  z-index: 999;
  & span {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.65rem;
    font-weight: 600;
    margin-left: 6px;
    margin-bottom: 6px;
  }
  & .banner-new {
    background: #37bc4f;
    color: #fff;
  }
  & .banner-sale {
    background: #eb9d00;
    color: #000;
  }
  & .banner-special {
    background: #6f37bc;
    color: #fff;
  }
`

export const ProductBoxBrand = styled.div`
  width: 100%;
`

export const ProductBoxImage = styled(Image)`
  background: #fff;
  width: 100% !important;
  border-radius: 16px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  object-fit: cover;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
  & > div {
    position: unset !important;
  }
`

export const ProductBoxRatingWrapper = styled.span`
  position: absolute;
  z-index: 999;
  display: flex;
  padding: 2px 8px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  left: 8px;
  bottom: 8px;
`
