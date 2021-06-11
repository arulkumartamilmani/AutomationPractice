//Environment
const environ = 'prod'

//Page Elements
const txtTitle ='Login - My Store'
const inputSalutation1 = '#id_gender1'
const inputSalutation2 = '#id_gender2'
const inputCFistname = '#customer_firstname'
const inputCLastname = '#customer_lastname'
const inputPassword = '#passwd'
const inputAddress1 = '#address1'
const inputCity = '#city'
const inputState = '#id_state'
const inputPostalcode = '#postcode'
const inputMobile ='#phone_mobile'
const btnSubmit = '#submitAccount'


export const createAccountPage = {
// Actions
  keyinmadatoryfields(){
    cy.fixture('autdata').then((data)=>{
          this.checkSalutation(data.gender);
          this.enterText(inputCFistname, data.firstName);
          this.enterText(inputCLastname, data.lastName);
          this.enterText(inputPassword,data.password);
          this.enterText(inputAddress1,data.address1);
          this.enterText(inputCity,data.city);
          this.enterText(inputPostalcode,data.postcode);
          this.enterText(inputMobile,data.mobile);
          this.selectState(data.state);        
        });
    
  },

  enterText(element, value){
    cy.get(element)
     .clear()
     .type(value) 

  },
  
  checkSalutation(value) {
    if (value=="Male"){
      cy.get(inputSalutation1).check()
    }
    else{
      cy.get(inputSalutation2.check())
    }
  },

  selectState(txtstate){
    if (txtstate=="New Jersey"){
      statecode=30
    }
    get(inputState).select(statecode)
  },
  
  clickSubmit() {
    cy.get(btnSubmit)
      .first().click()
  },
  

  // Assertions
  verifyAccountNameDisplayed() {
    cy.fixture('autdata').then((data) => {
      cy.xpath(accountName)
        .invoke('text')
        .should('contain', data.username)
    })
  },

  verifyTitle() {
    cy.title().should("include", txtTitle);
  },

  verifyAuthError(){
    cy.contains(txtAuthError)
       .invoke('show').should('be.visible');
  },

  verifyUrl() {
     cy.fixture(environ).then((data)=>{
        cy.url().should("include",data.accountCreationurl);});
  }
 
}