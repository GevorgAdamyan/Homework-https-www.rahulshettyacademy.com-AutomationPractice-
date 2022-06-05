const Page = require("./page");

class Frame extends Page {
    get iFrame() {
        return $("#courses-iframe")
    }

    async switchToiFrame() {
        let frame = await this.iFrame;
        await frame.scrollIntoView();
        await browser.switchToFrame(frame);
    }

    get viewAllCoursesBtnFrame() {
        return $(".courses-section > .text-center > a")
    }

    get currencySwitcher() {
        return $("label.onoffswitch4-label")
    }

    async switchTheCurrency() {
        let switcher = await this.currencySwitcher
        await switcher.click();
    }

    get dollarInner() {
        return $("label.onoffswitch4-label > .onoffswitch4-switch")
    }
}

module.exports = new Frame();
