import ProductDetail from '..'

describe('<ProductDetail>', () => {
  it('render correctly', () => {
    cy.mount(<ProductDetail price={12.99} name={'ProductDetail'} />)
    cy.contains('ProductDetail')
    // Render Formated Price correctly
    cy.contains('12,99 €')
  })
})
