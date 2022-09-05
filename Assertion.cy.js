
/// <reference types = "cypress"/>


it('Assertion Check', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('get').click()

    cy.get('#query-btn')
    .should('contain','Button')
    .should('be.visible')
    .should('be.enabled')

})