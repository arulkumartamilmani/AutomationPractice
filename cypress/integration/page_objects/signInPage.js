//Environment
const environ = 'prod'

//Page Elements
const txtTitle ='Login - My Store'
const inputEmail = '#email'
const inputPassword = '#passwd'
const buttonSubmit = '#SubmitLogin'
const txtAuthError = 'Authentication failed.'
const inputEmailCreate = '#email_create'
const buttonSubmitCreate = '#SubmitCreate'
const notifycreateaccount = "ol > li"
const txtNotifyRegistered = 'An account using this email address has already been registered. Please enter a valid password or request a new one.'

var chance = require('chance').Chance();

export const signInPage = {
// Actions

  visitSignInPage(){
    // loading prod config
    cy.fixture(environ).then((data)=>{
      cy.visit(data.signInPageurl);})
  },

  enterCreateAcctEmail(email) {
    cy.get(inputEmailCreate)
      .clear()
      .type(email)
  },  

  enterEmail(email) {
    cy.get(inputEmail)
      .clear()
      .type(email)
  },
  
  enterPassword(password) {
    cy.get(inputPassword)
      .clear()
      .type(password)
  },
  
  clickSubmit() {
    cy.get(buttonSubmit)
      .first().click()
  },
  
  typeusername(args){
    switch(args){
      case "valid":
        cy.fixture('autdata').then((data)=>{
          this.enterEmail(data.email);});
      break;
      case "invalid":
        cy.fixture('autdata').then((data)=>{
          this.enterEmail(data.invalidEmail);})
      break;
    }
  },

  typepassword(args){
    switch(args){
      case "valid":
        cy.fixture('autdata').then((data)=>{
          this.enterPassword(data.password);});
      break;
      case "invalid":
        cy.fixture('autdata').then((data)=>{
          this.enterPassword(data.invalidPassword);});
      break;
    }
  },

  typeemail(args){
    switch(args){
      case "validandunregistered":
        this.enterCreateAcctEmail(chance.email({domain:'theorem.com'}));
      break;
      case "validandregistered":
        cy.fixture('autdata').then((data)=>{
          this.enterCreateAcctEmail(data.email);})
      break;
    }
  },  
  
  clickCreateAccount() {
    cy.get(buttonSubmitCreate)
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

  verifyNotificationRegistered(){
    cy.get(notifycreateaccount)
       .invoke('text')
       .should('contain',txtNotifyRegistered);
  }
 
}