describe('open localhost', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
  })
})
