describe ('Web Table Value Handling', function(){
    it ('Price value extract from table', function(){
        cy . visit('https://rahulshettyacademy.com/AutomationPractice/#')
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Write')){
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).equal('0')
                })
            }
        })
    })
})