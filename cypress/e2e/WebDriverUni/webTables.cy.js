/// <reference types="cypress" />

describe("Interact with dropdown lists via webdriveruni", () => {

    beforeEach('Open browser', () => {
        cy.openwebDriverUni();
        cy.contains('DATA, TABLES & BUTTON STATES').invoke('removeAttr', 'target').click({ force: true })
    });
    it('Table Verification', () => {
        const expectedTableData = ['Firstname', 'Lastname', 'Age'];     // Define your expected data in an array list
       
        cy.get('[id="t01"] tr').first().each(($row, $rowindex) => {     // Assuming the table has rows and columns, verify the data in the first row

            cy.wrap($row).find('th').each(($cell,i) => {

                cy.wrap($cell).invoke('text').then((text) => {          // Get the cell text

                    cy.wrap(text).should('equal', expectedTableData[i]);   //compare the cell text with the expected data
                })
            })
        })
    });
});