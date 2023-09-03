/// <reference types='cypress' />

describe('Alieas and invoke', () => {

    beforeEach('Open browser', () => {
        cy.openAutomationStore();

    });
    it('Validate a specific hair care product', () => {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail') // alias is like a variable
        cy.get('@productThumbnail').its('length').should('be.gt', 5) // length of the text should be greater than 5
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner') // text should include Seaweed Conditioner
    })
    it('Validate product thumbnail', () => {
        cy.get('.thumbnail').as('productThumbnail') // alias is like a variable
        cy.get('@productThumbnail').should('have.length',16)  // length of the text should be greater than 5

        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')   // find the productcart class and invoke the attribute title and check if it includes Add to Cart
    })
})