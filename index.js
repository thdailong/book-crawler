// const { default: startBrowser } = require("./browser");
// const browserObject = require("./browser");
// const scraperController = require("./pageController");
import scraperController from "./pageController.js";
import { startBrowser } from "./browser.js";

//Start the browser and create a browser instance
let browserInstance = startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance);
