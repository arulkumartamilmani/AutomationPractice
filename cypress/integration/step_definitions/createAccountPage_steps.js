
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { createAccountPage, signInPage, accountPage } from "../page_objects/createAccountPage";


Then("user lands on Account Creation Page",() => {
  createAccountPage.verifyUrl();
})

When("user fills in all mandatory fields only with valid format",() => {
  createAccountPage.keyinmadatoryfields();
})

And("clicks on Register button",() => {
  createAccountPage.clickSubmit();
})

Then("lands in my Account page on successful account creation",() => {
  accountPage.verifyTitle();
})

