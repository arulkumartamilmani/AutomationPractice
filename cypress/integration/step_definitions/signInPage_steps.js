
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { signInPage } from "../page_objects/signInPage";

Given("On SignIn Page", () => {
  signInPage.visitSignInPage();
  signInPage.verifyTitle();
})


Then("user lands on Signin Page",() => {
  signInPage.verifyTitle();
})

And("user enters {string} username", (string) => {
  signInPage.typeusername(string);
})

And("user enters {string} password", (string) => {
  signInPage.typepassword(string);
})

And("user clicks the SignIn button", () => {
  signInPage.clickSubmit();
})

Then("user encounters Authentiation error",()=>{
  signInPage.verifyAuthError();
})

And("user enters {string} email id", (string) => {
  signInPage.typeemail(string);
})

And("user clicks the CreateAccount button", () => {
  signInPage.clickCreateAccount();
})

Then("verify notification that email id is already registered",()=>{
  signInPage.verifyNotificationRegistered();
})