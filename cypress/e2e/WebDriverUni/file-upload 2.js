/// <reference types="cypress" />

describe("Test Fiel Upload via webdriveruni", () => {

    beforeEach('Open browser', () => {
        cy.openwebDriverUni();
        cy.contains('FILE UPLOAD').invoke('removeAttr', 'target').click({ force: true })

    });
    it('Upload a file....', () => {
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.png');
        cy.get('#submit-button').click();
    });
    it('Upload No file....', () => {
        cy.get('#submit-button').click();

        cy.on('window:alert', (str) => {                                        // callback function - str is the parameter
            expect(str).to.equal('You need to select a file to upload!')        // window:alert is a cypress event to auto accept alerts
        })
    });
        
});