describe ('Select',()=>{
    it('should select box',()=>{
      cy.visit('https://devexpress.github.io/testcafe/example/')
      cy.get('#preferred-interface').select('JavaScript API')
      cy.get('#preferred-interface').should('have.value','JavaScript API')
    })
})