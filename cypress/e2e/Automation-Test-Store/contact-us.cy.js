/// <reference types='cypress' />



describe('Test Contact Us form via Automation Test Store', () => {

    beforeEach('Open browser', () => {
        cy.openAutomationStore();

    });
    it.only('Should be able to submit a successful submission via contact us form', () => {
            cy.contains('a','Contact Us').click().then(function(linkText) {
                cy.log('Selected the following link: ' + linkText.text())
            })
            cy.get('[name="first_name"]').type("Joe");
            cy.get('[id="ContactUsFrm_email"]').type("Blogs@mailinator.com");
            cy.get('[id="ContactUsFrm_enquiry"]').type("How to learn Cypress?");
            cy.contains('button', 'Submit').click();
            //cy.contains('Your enquiry has been successfully sent to the store owner!').should('be.visible')
            cy.get('div').find('p').eq(1).should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        })
    })
