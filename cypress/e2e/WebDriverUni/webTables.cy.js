/// <reference types="cypress" />

describe("Interact with WebTables", () => {

    beforeEach('Open browser', () => {
        cy.openwebDriverUni();
        cy.contains('DATA, TABLES & BUTTON STATES').invoke('removeAttr', 'target').click({ force: true })
    });
    it('Table Header Verification', () => {
        const expectedTableData = ['Firstname', 'Lastname', 'Age'];     // Define your expected data in an array list\

        cy.get('[id="t01"] tr').first().each(($row, $rowindex) => {     // Assuming the table has rows and columns, verify the data in the first row
            cy.wrap($row).find('th').each(($cell, i) => {
                cy.wrap($cell).invoke('text').then((text) => { 
                    cy.log(expectedTableData[i])         // Get the cell text
                    //cy.wrap(text).should('equal', expectedTableData[i]);   //compare the cell text with the expected data
                })
            })
        })
    });
    it('Calulate and Assert the total age of all users', () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {             //get the table and iterate through each cell
            userDetails[index] = $el.text();                                //store the cell text in an array

        }).then(() => {
            var i;
            for(i = 0; i < userDetails.length; i++) {                      
                if(Number(userDetails[i]))      {                          //iterate through the array and calculate the total age
                    numb += Number(userDetails[i])                         //only count cells with numbers
                }                            
                //cy.log(userDetails[i])
            }  
            cy.log('Total age: ' + numb)                                    //log the total age   
            expect(numb).to.eq(322)                                          //assert the total age                                                          
        })

    });
    it.only ('Calculate and assert the age of a given user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {                                                              //get the table and iterate through each cell
            const text = $el.text();                                                                                                         //store the cell text in a variable
            if(text.includes('Woods')) {                                                                                                     //if the cell text contains the last name
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {                                              //get the age of the user
                    const userAge = age.text();                                                                                              //store the age in a variable
                    expect(userAge).to.equal('80');                                                                                          //assert the age of the user
                })
            }
        })
    })
});