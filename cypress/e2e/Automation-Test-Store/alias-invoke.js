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
        cy.get('@productThumbnail').should('have.length', 16)  // length of the text should be greater than 5

        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')   // find the productcart class and invoke the attribute title and check if it includes Add to Cart
    })
    it.only('Calculate total of normal and sale products', () => {
        cy.get('.thumbnail').as('productThumbnail') // alias is like a variable
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('sellItemPrice')

        var itemsTotal = 0;                         // global variable to store the total price of all products
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$')          // split the text by $ sign
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])   // convert the text to number and add it to the total
            }
            itemsTotal += itemsPriceTotal;
            cy.log('Non sale price items total: ' + itemsPriceTotal)
        })

        cy.get('@sellItemPrice').then($linkText => {
            var sellItemsPriceTotal = 0;
            var saleItemPrice = $linkText.split('$')          // split the text by $ sign
            var i;
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                sellItemsPriceTotal += Number(saleItemPrice[i])   // convert the text to number and add it to the total
            }
            itemsTotal += sellItemsPriceTotal;
            cy.log('Sale price items total: ' + sellItemsPriceTotal)
        })
        .then(() => {
            cy.log('The total price of all products: ' + itemsTotal)
            expect(itemsTotal).to.equal(660.5)
        })
    })
})