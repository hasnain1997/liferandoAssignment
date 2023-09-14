import {AssertionsHomeScreen} from "../support/helpers/assertionsHomeScreen";
import {AssertionsResultScreen} from "../support/helpers/assertionsResultScreen";
import Utils from "../support/utils";

const assertionsHomeScreen = new AssertionsHomeScreen()
const assertionsResultScreen = new AssertionsResultScreen()
const utils = new Utils()

describe("Verify filter functionality for Test Job with Netherlands Filter", function() {

    const strings = utils.getTestStringData()

    before(() =>
    {
        assertionsHomeScreen.visitUrlAndVerifyTitle(strings.liferandoCareerPortalTitle)
        assertionsHomeScreen.mockLocation()
        assertionsHomeScreen.acceptCookies()

    })

    it("Verify filter functionality for Test Job with Netherlands Filter", function() {

        assertionsHomeScreen.enterJobTitleInTheSearchBar(strings.testJob)
        assertionsHomeScreen.clickOnTheSearchButton()
        assertionsResultScreen.clickOnTheNextPageAndVerifyIfMultipleLocationsExist()
        assertionsResultScreen.selectOptionFromTheMainSideBar(strings.country)
        assertionsResultScreen.selectCheckbox( strings.netherlands)
        assertionsResultScreen.setDelay(4000)
        assertionsResultScreen.clickOnTheNextPageAndVerifyIfOnlySingleLocationsExist()

    });

});
