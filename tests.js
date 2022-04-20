const {Builder, By, Key, utill, WebElement} = require("selenium-webdriver");
const by = require("selenium-webdriver/lib/by");

async function registerUser() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.id("register")).click();
    await driver.findElement(By.id("name")).sendKeys("test");
    await driver.findElement(By.id("email")).sendKeys("test@abv.bg");
    await driver.findElement(By.id("password")).sendKeys("testtest");
    await driver.findElement(By.id("number")).sendKeys("1122334455");
    await driver.findElement(By.id("cra")).click();
}
//registerUser();
async function placeItemInCart() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.id("inflohome")).click();
    await driver.sleep(1500);
    await driver.findElement(By.id("Stella")).click();
    await driver.sleep(2500);
    await driver.findElement(By.id("story is my life-2719")).click();
    await driver.sleep(1000);
    await driver.findElement(By.id("addBtn")).click();
}
//placeItemInCart();

async function login(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.id("login")).click();
    await driver.findElement(By.id("email")).sendKeys("kris");
    await driver.findElement(By.id("password")).sendKeys("kriskris");
    await driver.findElement(By.id("loginBtn")).click();
}
//login();

async function searchByKewWord() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.id("search-box")).sendKeys("t-shirt");
    await driver.findElement(By.id("search-btn")).click();
}
//searchByKewWord();

async function applyForSellerAccount() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.id("login")).click();
    await driver.findElement(By.id("email")).sendKeys("test@abv.bg");
    await driver.findElement(By.id("password")).sendKeys("testtest");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.sleep(2000);
    await driver.executeScript('window.scrollTo(0,1000);');
    await driver.sleep(1000);
    await driver.findElement(By.id("become-seller")).click();
    await driver.sleep(500);
    await driver.findElement(By.id("apply-btn")).click();
    await driver.findElement(By.id("business-name")).sendKeys("Test business name");
    await driver.findElement(By.id("business-add")).sendKeys("Test business addres");
    await driver.findElement(By.id("about")).sendKeys("Test about");
    await driver.findElement(By.id("number-subs")).sendKeys("10000");
    await driver.findElement(By.id("number")).sendKeys("1122334455");
    var uploadBtn = driver.findElement(By.id("first-file-upload-btn"));
    uploadBtn.sendKeys("C:\\Users\\Kristiyan\\Desktop\\инфлуенсъри\\test.png");
    await driver.sleep(1000);
    await driver.findElement(By.id("apply-form-btn")).click();
}
//applyForSellerAccount();

async function aproveRequest() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.id("login")).click();
    await driver.findElement(By.id("email")).sendKeys("kris");
    await driver.findElement(By.id("password")).sendKeys("kriskris");
    await driver.findElement(By.id("loginBtn")).click();
    await driver.findElement(By.id("adminPanel")).click();
    await driver.findElement(By.name("id")).sendKeys("test@abv.bg");
    await driver.sleep(1000);
    await driver.findElement(By.name("updateBtnRequests")).click();
}
//aproveRequest()