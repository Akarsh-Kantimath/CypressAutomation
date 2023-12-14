/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Handling Frames', function(){
    it('Handling ifrmaes', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('iframe#courses-iframe')

        cy.iframe().find('a[href="mentorship"]').eq(0).click();
        cy.iframe().find('.lower-content').should('have.length',12)
    })
})
