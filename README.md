# Playwrite-Demo
Hi!!, This framework designed using `Playwright` and `allure-report`<br/>

# What is Playwright Test? framework for E2E test<br/>
## Whats include in Playwright test out of box<br/>
- TypeScript support out-of-the-box<br/>
- Parallel execution out-of-the-box<br/>
- Cross-browser, snapshots, fixtures, ...<br/>
- Time-travel debugging <br/>
- Smart Selector `sudo` classes<br/>
Open Source - Free<br/>

<br/>

# Install Node.js
Go to the following links and download and install the latest version of Node.js which contains NPM, if you have not yet had this installed, this is required for installing Framework.

https://nodejs.org/en/

<br/>

# Running NPM install

`npm install` This installs all required packages. After the install completed, you are ready to start. :)
`npx playwright install` This is to install browsers if not installed previously. 
<br/>
more : https://playwright.dev/docs/browsers 

<br/>

# Run Test
There are a couple of tests executed commands<br/>
By defult test run headless<br/>
eg: `npx playwright test`<br/>
Here are the most common options available in the command line.<br/>

Run all the tests<br/>
`npx playwright test`<br/><br/>

Run a single test file<br/>
`npx playwright test tests/todo-page.spec.ts`<br/><br/>

Run the test with the title<br/>
`npx playwright test -g "add a todo item"`<br/><br/>

Run tests in headed browsers<br/>
`npx playwright test --headed`<br/><br/>

Run in debug mode with Playwright Inspector<br/>
`npx playwright test --debug`<br/><br/>

Ask for help<br/>
`npx playwright test --help`<br/><br/>

You could run your first test from the following command <br/>
`npx playwright test`<br/>

More commands : https://playwright.dev/docs/test-cli<br/>

Playwright by defult run with `chromium` , `webkit` , `firefox`, but if you wanna emulate different `devices`, locale or timezone, 
we have to config a `playwright.config.ts` and I already configured in the project. <br/>
ref: https://playwright.dev/docs/test-configuration <br/>

When you <br/>
`npx playwright test` > Running number of contexts define in `playwright.config.ts` <br/>
`npx playwright test --project=webkit` > Running only in `webkit`<br/>

If you not config any `playwright.config.ts` then you want to run only in one browser <br/>
`npx playwright test --browser=webkit` > Running only in `webkit`<br/> 
`npx playwright test --browser all` > Running in all defult browsers<br/>
Note: If configured `playwright.config.ts` with `projects`, then cannot use the `--browser` as argument. you have to use the `--project` as argument<br/>
<br/>

# Directories 
```
Playwright-demo
├── .github
├── tests
│   ├── lib
│   │   └── page
│   ├── data
│   └── test-examples
├── .env
├── package.json
└── README.md
```
<br/>

# Cross Browser and Cross device support
Supporting browsers 
- `chromium`
- `webkit` = `Safari`
- `firefox`
- `chrome`
- `msedge`

Supporting Devices - Playwright support lots of Device emulation, IOS - Mobiles and Tabs , Android - Mobile and Tabs and other more devices.
 <br/>

## Generate tests
codegen will help to generate test automatically.
`npx playwright codegen qa.villo.io`
## What Playwrite support - eg: Api testing, mocking and etc
Check out : https://playwright.dev/docs/intro <br/>
Api Testing : https://playwright.dev/docs/test-api-testing <br/>
Authentication : https://playwright.dev/docs/test-auth <br/>


