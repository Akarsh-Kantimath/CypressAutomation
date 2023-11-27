/// <reference types="Cypress" />

describe('My First Test Suite', function(){
it('My FirstTest case', function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); //Visit a site
    cy.get('.search-keyword').type('ca');//pass a value into textfield
    cy.wait(2000);//hard wait
    cy.get('.product:visible').should('have.length',4);//Assertion of Array count
    cy.get('.products').as('productLocator')//aliasing the particular css locator
    cy.get('@productLocator').find('.product').should('have.length',4);//Parent Child chaining
    
    //In a array selecting a paricular element by eq() method based on the position of array
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
        console.log('sfw') //to print a text in dev tool console
    })

    //In a array, choosing for-each method to select a element dynamically 
    cy.get('.products').find('.product').each(($el, index, $list) => {
    
        const textVeg = $el.find('h4.product-name').text() //text() is used fetch a text from element
        if(textVeg.includes('Cashews')){ // includes() is used to fetch part of the text
            cy.wrap($el).find('button').click();// click() method
        }
    })
    // below is a example of customized - out of the cypress method 
    cy.get('.brand.greenLogo').then(function(logoElement){
        cy.log(logoElement.text()) //cy.log is used to print in the left navigation bar
    })

    cy.get('.brand.greenLogo').should('have.text','GREENKART')
    
})

})