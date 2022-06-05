module.exports = class Page {
    async goTo (path) {
        await browser.maximizeWindow()
        await browser.url(path)
    }
}
