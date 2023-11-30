describe('dropdown_handling',function(){
    it('Static Dropdown',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('Option2').should('have.value','option2') //Static dropdown

        
    })
})