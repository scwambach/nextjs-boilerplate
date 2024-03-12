describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('http://localhost:3030/')
    cy.injectAxe()
    cy.checkA11y()
  })
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3030/')
    // look for the first button in the header and click it
    cy.get('header button').click()
    // find the link that says "About Us" and click it
    cy.get('a').contains('About Us').click()
    // wait for the about page to be loaded
    cy.url().should('include', '/about')
    // there should be an h1 that says "About Us"
    cy.get('h1').contains('About Us')
  })
})
