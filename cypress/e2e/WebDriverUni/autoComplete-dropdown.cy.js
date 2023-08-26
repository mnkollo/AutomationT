/// <reference types="cypress" />

describe("Verify Autocomplete dropwdown lists via webdriveruni", () => {
    it("Select specific product via autocomplete list", () => {
        cy.openwebDriverUni();
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado';

            if (prod === productToSelect) {
                cy.wrap($el).click();

                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('G')

            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {   //$list is the list of elements
                const prod = $el.text();                                            //jQuery method to get text from element
                const productToSelect = 'Grapes';

                if (prod === productToSelect) {
                    cy.wrap($el).click();

                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })
        });
    })
})