describe('Handing Visible and Invisible elements',function(){
    it ('Visible and Invisible Elements',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.inputs.displayed-class').should('be.visible')
        cy.get('input[value="Hide"]').click()
        cy.get('.inputs.displayed-class').should('not.be.visible')
        cy.get('input[value="Show"]').click()
        cy.get('.inputs.displayed-class').should('be.visible')
    })
})