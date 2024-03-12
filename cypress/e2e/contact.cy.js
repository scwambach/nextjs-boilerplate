describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('http://localhost:3030/contact')
    cy.injectAxe()
    cy.checkA11y()
  })
})
