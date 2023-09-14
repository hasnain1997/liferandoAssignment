import {BaseHelper} from "./baseHelper";
import {HomeScreenPO} from "../pageObjects/homeScreenPO";

const homeScreenPO = new HomeScreenPO()
export class AssertionsHomeScreen extends BaseHelper{

    /**
     * accept cookies
     */
    acceptCookies(){
        this.clickOnElement(homeScreenPO.getCookiesSelectionButton().eq(1))
    }

    /**
     * mock location
     */
    mockLocation(){
        cy.mockGeolocation()
    }

    /**
     * type and verify text
     * @param title - element of text
     */
    enterJobTitleInTheSearchBar(title)
    {
        this.typeAndVerify(homeScreenPO.getJobSearchField(), title)
    }

    /**
     * type and verify text
     * @param title - element of text
     */
    enterLocationInTheSearchBar(title)
    {
        this.typeAndVerify(homeScreenPO.getLocationSearchField(), title)
    }

    /**
     * click On Search Button
     */
    clickOnTheSearchButton()
    {
        this.clickOnElement(homeScreenPO.getJobSearchButton())
    }

    /**
     * click On Job Search Bar
     */
    clickOnTheJobSearchField()
    {
        this.clickOnElement(homeScreenPO.getJobSearchField())
    }

    /**
     * click On Sales Job from the dropdown
     */
    clickOnTheSalesCategoryInDropdown()
    {
        this.clickOnElement(homeScreenPO.getSalesOption())
    }
}
