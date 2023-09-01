/// <reference types='cypress' />

describe('Iterate over elements', () => {

    beforeEach('Open browser', () => {
        cy.openAutomationStore();

    });
    it('Log information of all hair care products', () => {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log('Index: ' + index + ' : ' + $el.text())
        })
    })
    it('Add specific product to basket', () => {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            const prodName = $el.text();

            if (prodName.includes('Curls to straight Shampoo')) {
                cy.wrap($el).click()
            }
        })
    })
})