describe('Second test',function(){
    it('till place order flow',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.products').find('.product').each(($el, index, $list) =>{
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($el).contains('ADD TO CART').click() //contains() is used to check the element text.
            }
        })
        cy.get('img[alt=Cart]').click()
        cy.contains('PROCEED TO CHECKOUT').click()


    })
})