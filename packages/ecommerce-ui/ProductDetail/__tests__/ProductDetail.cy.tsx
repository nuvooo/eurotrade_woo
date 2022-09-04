import ProductDetail from '..'

describe('<ProductDetail>', () => {
  it('render correctly', () => {
    cy.mount(<ProductDetail price={12.99} name={'ProductDetail'} />)
  })
})
