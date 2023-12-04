describe('Mouse Hover Menu Handling', function(){
    it ('Mouse hover menu Action', function (){
        cy . visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Method 1 : selecting immediate parent url for options, to show the options of the mouse hover menu
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click();
        cy.url().should('include','top')
        //Method 2 : to click the mouse hover menu options, using {force :true}
        cy.contains('Reload').click({force : true})
        //console .log(cy.url())
        //cy.log(cy.url())
    })
})