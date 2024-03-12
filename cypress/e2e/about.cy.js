describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('http://localhost:3030/about')
    cy.injectAxe()
    cy.checkA11y()
  })
})
