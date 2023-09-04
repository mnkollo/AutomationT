/// <reference types='cypress' />

import { contactUsPage } from '../../pages/contactUsPage';


describe('Test Contact Us form via WebdriverUni', () => {

    beforeEach('Open browser', () => {
        cy.openwebDriverUni();
        cy.get('[href="Contact-Us/contactus.html"]')
        .invoke('removeAttr', 'target').click({ force: true })

    });
    it('Should be able to submit a successful submission via contact us form', () => {
        //cypress code
        contactUsPage.successSubmission();
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        //cypress code
        contactUsPage.unsuccessSubmission();
    });

    // it('Locators', () => {
    //     //ID
    //     cy.get('#contact-us').click();
    // });
})