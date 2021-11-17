describe('example home test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('shows main title', () => {
        cy.get('a.App-link').should('have.text', 'Learn React')
    })
})
