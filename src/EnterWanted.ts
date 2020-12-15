import { By, until, WebDriver } from "selenium-webdriver";


/**
 * @param
 */
export class EnterWanted{
    driver: WebDriver;
    url: string="https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
    title: By = By.className("cake");
    header: By = By.name("hdrInput");
    mke: By = By.name("mkeInput");
    oai: By = By.name("oriInput");
    name: By = By.name("namInput");
    sex: By = By.name("sexInput");
    race: By = By.name("racInput");
    height: By = By.name("hgtInput");
    weight: By = By.name("wgtInput");
    hair: By = By.name("haiInput");
    offense: By = By.name("offInput");
    dow: By = By.name("dowInput");
    dl: By = By.name("olnInput");
    dls: By = By.name("olsInput");
    dled: By = By.name("olyInput");
    lp: By = By.name("licInput");
    ls: By = By.name("lisInput");
    ly: By = By.name("liyInput");
    submit: By = By.id("saveBtn");
    result: By = By.name("queryBody");
    errorList: By = By.id("errorList");
    


    constructor(driver: WebDriver){
        this.driver = driver;
    }

    async navigate(){
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.title));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.title)));
    }

    async getResult(){
        await this.driver.wait(until.elementLocated(this.result));
         return await (await this.driver.findElement(this.result)).getText();
    }

    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
      }

    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).getText();
      }
}