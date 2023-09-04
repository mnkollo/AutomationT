/// <reference types='cypress' />

import { contactUsPage } from '../../pages/contactUsPage';


describe('Cypress web security', () => {

   
    it.only('Validate visiting two different domains', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://automationteststore.com/')  // this will fail cause of the same origin policy, cannot visit two super domains
    });

    it.only('Validate visiting two different domains via user actions', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
    it.only('Origin command', () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/");
        })

        //Same Origin Example:
        //cy.visit("https://www.webdriveruniversity.com");
        //cy.visit("https://selectors.webdriveruniversity.com");
    });
})