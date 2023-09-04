/// <reference types='cypress' />



describe('Inspect Automation Test Store items using chain of commands', () => {

    beforeEach('Open browser', () => {
        cy.openAutomationStore();

    });
    it('Click on the first item using item header', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();    //contains is a jQuery method   //chaining commands
    })
    it('Click On the First Item using index', () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();    //eq is a jQuery method   //chaining commands
    })
})