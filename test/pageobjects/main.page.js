const Page = require("./page")

class MainPage extends Page {
    async goTo(path) {
        return super.goTo(path);
    }

    get pageTitle() {
        return $("body > h1")
    }

    async getPageTitleText() {
        let title = await this.pageTitle;
        return title.getText();
    }
}

module.exports = new MainPage();
