const Page = require("./page");

class Hover extends Page {
    get mouseHoverBtn() {
        return $("#mousehover")
    }

    async hoverTheBtn() {
        let hoverBtn = await this.mouseHoverBtn;
        await hoverBtn.scrollIntoView();
        await hoverBtn.moveTo();
    }

    get hoverList() {
        return $(".mouse-hover-content")
    }

    async getHoverListItem(index) {
        let list = await this.hoverList;
        await list.waitForDisplayed();
        return $(`.mouse-hover-content > a:nth-child(${index})`);
    }

    async selectHoverListItem(index) {
        let item = await this.getHoverListItem(index);
        await item.click();
    }

    get pageLogo() {
        return $("a .logoClass")
    }
}

module.exports = new Hover();
