import type { NextPage } from 'next'
import ProductDetail from '../../packages/ecommerce-ui/ProductDetail'

const Product: NextPage = () => {
  return <ProductDetail price={12.99} name="Product" />
}

export default Product
