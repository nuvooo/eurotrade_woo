import { Typography } from '@mui/material'
import React from 'react'
import { PriceWrapper } from './styles'

interface PriceProps {
  price: number
  currency?: 'EUR' | 'USD'
  locales?: 'de-DE' | 'en-US' | 'de-AT'
  taxText: string
}
const Price: React.FC<PriceProps> = ({
  price = 0.0,
  currency = 'EUR',
  locales = 'de-DE',
  taxText = '',
}): React.ReactElement => {
  return (
    <PriceWrapper>
      <span className={'displayed-price'}>
        {price.toLocaleString(locales, { style: 'currency', currency })}
      </span>
      <Typography className={'displayed-tax'} component="span">
        {taxText}
      </Typography>
    </PriceWrapper>
  )
}
export default Price
