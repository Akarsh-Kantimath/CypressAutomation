describe('dropdown_handling',function(){
    it('Static Dropdown',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('Option2').should('have.value','option2') //Static dropdown
    })
    it('dynamic Dropdown',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.inputs.ui-autocomplete-input').type('ind')

        cy.get('.ui-menu-item').each(($el, index, $list) => {
            if($el.text() === 'India'){
                $el.click()
            }
        })
        cy.get('input#autocomplete').should('have.value','India')
    })
})