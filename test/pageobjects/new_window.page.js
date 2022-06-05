const Page = require("./page");

class NewWindow extends Page {
    get openNewWindowBtn() {
        return $("#openwindow");
    }

    async openNewWindow() {
        let openBtn = await this.openNewWindowBtn;
        await openBtn.click();
        await browser.switchWindow("QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy");
        await browser.maximizeWindow();
    }

    get newWindowTitle() {
        return $(".text-center> h2")
    }

    async getNewWindowTilteText() {
        let windowTitle = await this.newWindowTitle;
        return windowTitle.getText();
    }

    get popUpWindow() {
        return $(".listbuilder-popup-scale")
    }

    get noThanksBtn() {
        return $(".listbuilder-popup-content > div > div > div > span > div > div:nth-child(7) > div > div > button");
    }

    async closePopUpWindow() {
        let popUp = await this.popUpWindow;
        await popUp.waitForDisplayed();
        let closeBtn = await this.noThanksBtn
        await closeBtn.waitForClickable();
        await closeBtn.click();
    }

    get viewAllCoursesBtn() {
        return $(".text-center > a")
    }

    async scrollToViewAllCoursesBtn() {
        let buttonToScroll = await this.viewAllCoursesBtn
        await buttonToScroll.scrollIntoView();
    }
}

module.exports = new NewWindow();
