const MainPage = require("../pageobjects/main.page");
const RadioButtons = require("../pageobjects/radio_buttons.page");
const Autocomplete = require("../pageobjects/autocomplete.page");
const Dropdowns = require("../pageobjects/dropdowns.page");
const Checkboxes = require("../pageobjects/checkboxes.page");
const NewWindow = require("../pageobjects/new_window.page");
const NewTab = require("../pageobjects/new_tab.page");
const Alerts = require("../pageobjects/alerts.page");
const HideAndShow = require("../pageobjects/hide_and_show.page");
const Scrolls = require("../pageobjects/scrolls.page");
const Hover = require("../pageobjects/hover.page");
const Frame = require("../pageobjects/iframe.page");
const expect = require("chai").expect;
const helper = require("../helper/helper")


describe("Working with WebElements", () => {
    beforeEach(async () => {
        await MainPage.goTo("https://www.rahulshettyacademy.com/AutomationPractice/");
        let pageTitle = await MainPage.getPageTitleText()
        expect(pageTitle).to.contain(helper.mainPageTitle)
    })

    it("Selecting a Radio Button", async () => {
        let index = helper.randomIndex();
        let radioBtn = await RadioButtons.getRadioBtn(index)
        await RadioButtons.selectRadioBtn(index)
        expect(await radioBtn.isSelected()).to.be.true;
    })

    it("Selecting a country", async () => {
        let countryNameLetters = helper.countryNameLetters;
        await Autocomplete.selectCountry(countryNameLetters);
        let countryName = await Autocomplete.getSuggestedCountryText()
        expect(countryName).to.contains(countryNameLetters);
    })

    it("Selecting a dropdown option", async () => {
        let index = helper.randomIndex()
        await Dropdowns.selectDropdownOption(index);
        let selectedOptionName = await Dropdowns.getDropdownOptionText();
        expect(selectedOptionName).to.contain(`${index-1}`)
    })

    it("Selecting a checkbox option", async () => {
        let index = helper.randomIndexForCheckbox()
        await Checkboxes.selectCheckboxOption(index);
        let selectedOption = await Checkboxes.getCheckboxOption(index)
        expect(await selectedOption.isSelected()).to.be.true;
    })

    it("Opening new window", async () => {
        await NewWindow.openNewWindow();
        let newWindowTitle = await NewWindow.getNewWindowTilteText()
        expect(newWindowTitle).to.be.equal(helper.newWindowPageTitle.toUpperCase())
        await NewWindow.closePopUpWindow();
        await NewWindow.scrollToViewAllCoursesBtn()
        let buttonToScroll = await NewWindow.viewAllCoursesBtn;
        expect(await (buttonToScroll).isDisplayedInViewport()).to.be.true;
    })

    it("Opening a new tab", async () => {
        await NewTab.openNewTab();
        let pageHeader = await NewTab.newTabLeftHeader;
        expect(await pageHeader.isDisplayed()).to.be.true;
        await browser.switchWindow("Practice Page")
    })

    it("Open alert", async () => {
        let name = helper.randomStringGenerator();
        await Alerts.insertNameInAlertField(name);
        await Alerts.openAlert();
        let alertIsOpened = await browser.isAlertOpen()
        expect(alertIsOpened).to.be.true;
        let alertMessage = await browser.getAlertText()
        expect(alertMessage).to.contain(name)
        await browser.acceptAlert();
        let alertIsCloseded = await browser.isAlertOpen()
        expect(alertIsCloseded).to.be.false;
    })

    it("Open confirm-alert", async () => {
        let name = helper.randomStringGenerator();
        await Alerts.insertNameInAlertField(name);
        await Alerts.openConfirm();
        let alertIsOpened = await browser.isAlertOpen()
        expect(alertIsOpened).to.be.true;
        let alertMessage = await browser.getAlertText()
        expect(alertMessage).to.contain(name)
        await browser.dismissAlert();
        let alertIsCloseded = await browser.isAlertOpen()
        expect(alertIsCloseded).to.be.false;
    })

    it("Working with hide/show fields", async () => {
        let text = await helper.randomStringGenerator()
        await HideAndShow.fillHiddenInputField(text);
        await HideAndShow.hideHiddenInputFiled();
        let inputField = await HideAndShow.hiddenInputField;
        expect(await inputField.isDisplayed()).to.be.false;
        await HideAndShow.openHiddenInputField();
        expect(await inputField.isDisplayed()).to.be.true;
        let inputText = await HideAndShow.getInputTextFromHiddenField();
        expect(inputText).to.be.equal(text);
    })

    it("Scroll the table", async () => {
        await Scrolls.scrollTheTable();
        let lastLine = await Scrolls.scrollTableLastLine
        expect(await lastLine.isDisplayedInViewport()).to.be.true;
    })

    it("Working with hover", async () => {
        await Hover.hoverTheBtn();
        let hoverlist = await Hover.hoverList;
        expect(await hoverlist.isDisplayedInViewport()).to.be.true;
        await Hover.selectHoverListItem(1);
        let logo = await Hover.pageLogo
        expect(await logo.isDisplayedInViewport()).to.be.true;
    })

    it("Working with iFrames", async () => {
        await Frame.switchToiFrame();
        let viewAllCoursesBtn = await Frame.viewAllCoursesBtnFrame;
        await viewAllCoursesBtn.scrollIntoView();
        let switcher = await Frame.currencySwitcher;
        await switcher.scrollIntoView();
        await Frame.switchTheCurrency();
        let dollarSwitch = await Frame.dollarInner;
        expect(await dollarSwitch.isDisplayed()).to.be.true;
    })
})
