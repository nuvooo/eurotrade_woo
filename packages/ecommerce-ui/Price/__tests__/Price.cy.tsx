import Price from '..'

describe('<Price>', () => {
  it('render correctly Price', () => {
    cy.mount(<Price price={12.99} />)
    cy.contains('12,99 €')
  })
})
