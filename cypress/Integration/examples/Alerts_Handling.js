describe('Alerts Handling',()=>{
    it('alerts automation',()=>{
        cy . visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[placeholder="Enter Your Name"]').type ('Akarsh')
        cy.get('input[value="Alert"]').click()

        //window:alert
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello Akarsh, share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})