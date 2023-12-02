describe('Child window / tab handling',() =>{
    it ('Child window automation', function(){
        cy. visit('https://rahulshettyacademy.com/AutomationPractice/#')
        cy . get('#opentab').invoke('removeAttr','target').click();

        //to perform validation on differnt domain inform cypress about domain through origin() method
        //cy. get('.ml-auto a[href="about.html"]').click()
        cy. origin('https://www.qaclickacademy.com/',() =>{
            cy. get('.ml-auto a[href="about.html"]').click()
            cy. get ('div[class="section-title mt-50"] h2').should('contain','Welcome to QAClick Academy ')
        })

    })
})