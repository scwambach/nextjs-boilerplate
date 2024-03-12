describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('http://localhost:3030/blog')
    cy.injectAxe()
    cy.checkA11y()
  })
})
