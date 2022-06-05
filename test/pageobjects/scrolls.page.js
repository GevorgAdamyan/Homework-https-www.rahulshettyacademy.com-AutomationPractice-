const Page = require("./page");

class Scrolls extends Page {
    get scrollTable() {
        return $(".tableFixHead")
    }

    get scrollTableLastLine() {
        return $(".tableFixHead > #product > tbody > tr:last-child")
    }

    async scrollTheTable() {
        let table = await this.scrollTable;
        await table.moveTo();
        let lastLine = await this.scrollTableLastLine;
        await lastLine.scrollIntoView();
    }
}

module.exports = new Scrolls();
