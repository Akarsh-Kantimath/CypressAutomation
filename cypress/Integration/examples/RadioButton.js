describe('Handling of Radio button',function(){
    it ('Radio button',function(){
        cy . visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio2"]').check().should('be.checked')
    })
})