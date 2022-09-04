import ProductBox from '..'

describe('<ProductBox>', () => {
  it('render correctly', () => {
    cy.mount(<ProductBox price={12.99} name={'ProductBox'} />)
    cy.contains('ProductBox')
    // Render Formated Price correctly
    cy.contains('12,99 €')
  })
})
