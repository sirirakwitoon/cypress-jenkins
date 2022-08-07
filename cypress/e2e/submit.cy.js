

describe ('Submit Form',()=>{
    it('should fill and submit developer name',()=>{
      cy.visit('https://devexpress.github.io/testcafe/example/')
      cy.get('#developer-name').type('nutsrk')
      cy.get('#tried-test-cafe').click()
      cy.get('#submit-button').click()
      cy.get('[data-testid="thank-you-header"]').contains('Thank you,')
    })
})