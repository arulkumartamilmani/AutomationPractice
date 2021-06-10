//Environment
const environ = 'prod'

// Page Elements
const txtTitle = 'Search - My Store'
const product1 = '.ajax_block_product:nth-child(1) .button:nth-child(1) > span'
const product2 = '.ajax_block_product:nth-child(2) .button:nth-child(1) > span'
const btn_continueshop = '.continue > span'
const btn_contitocheckout = '.button-medium:nth-child(2) > span'

//img[@title='Printed Summer Dress']

export const searchResultPage = {  
  
  // Actions
  visitsearchResultPage(){
    // loading prod config
    cy.fixture(environ).then((data)=>{
      cy.visit(data.searchResultPageurl);})
  },


  // Assertions
  verifyTitle() {
    cy.title().should("include", txtTitle);
  }
   
}