/// <reference types="cypress"/>

it('Google Search',function(){
    cy.visit('https://www.google.com')
    cy.get('.gLFyf',{timeout:5000}).type('Nord mobile')
    cy.contains('Google Search').click()
    cy.wait(5000)
    cy.contains('Videos').click()
})