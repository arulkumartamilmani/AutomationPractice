
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { homePage, searchResultPage } from "../page_objects/searchResultPage.js";


Then ("user lands on Search Result Page", ()=>{
    searchResultPage.verifyTitle()
})
