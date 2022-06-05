const Page = require("./page");

class NewTab extends Page {
    get newTabBtn() {
        return $(".cen-align #opentab");
    }

    async openNewTab() {
        let openBtn = await this.newTabBtn; 
        await openBtn.click();
        await browser.switchWindow("Rahul Shetty Academy")
    }

    get newTabLeftHeader() {
        return $(".header-text > .col-md-6")
    }
}

module.exports = new NewTab();
