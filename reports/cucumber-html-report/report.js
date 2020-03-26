$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Crossword Website",
  "description": "",
  "id": "crossword-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Crossword_WebPage_MAHALAKSHMI"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To check if the user is able to update the details",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-update-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC1_Updating_the_profile_details"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application to update",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user update the profile details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the updated browser",
  "keyword": "And "
});
formatter.match({
  "location": "Definition_UpdateProfile.the_User_launch_the_Chrome_application_to_update()"
});
formatter.result({
  "duration": 129959206828,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.43.38\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:603)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:136)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:75)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:163)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:150)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\r\n\tat com.Crossword.Pages.UpdateProfile_Crossword_Page.LaunchBrowser(UpdateProfile_Crossword_Page.java:28)\r\n\tat com.Crossword.StepDefinition.Definition_UpdateProfile.the_User_launch_the_Chrome_application_to_update(Definition_UpdateProfile.java:21)\r\n\tat ✽.Given The User launch the Chrome application to update(src/main/resources/feature/Testcase.feature:6)\r\nCaused by: java.lang.RuntimeException: NettyHttpHandler request execution error\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:61)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:45)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:43)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:75)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:136)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:75)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:163)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:150)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\r\n\tat com.Crossword.Pages.UpdateProfile_Crossword_Page.LaunchBrowser(UpdateProfile_Crossword_Page.java:28)\r\n\tat com.Crossword.StepDefinition.Definition_UpdateProfile.the_User_launch_the_Chrome_application_to_update(Definition_UpdateProfile.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.util.concurrent.ExecutionException: java.util.concurrent.TimeoutException: Request timeout to localhost/127.0.0.1:34210 after 60000 ms\r\n\tat java.util.concurrent.CompletableFuture.reportGet(Unknown Source)\r\n\tat java.util.concurrent.CompletableFuture.get(Unknown Source)\r\n\tat org.asynchttpclient.netty.NettyResponseFuture.get(NettyResponseFuture.java:201)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:55)\r\n\t... 58 more\r\nCaused by: java.util.concurrent.TimeoutException: Request timeout to localhost/127.0.0.1:34210 after 60000 ms\r\n\tat org.asynchttpclient.netty.timeout.TimeoutTimerTask.expire(TimeoutTimerTask.java:43)\r\n\tat org.asynchttpclient.netty.timeout.RequestTimeoutTimerTask.run(RequestTimeoutTimerTask.java:50)\r\n\tat io.netty.util.HashedWheelTimer$HashedWheelTimeout.expire(HashedWheelTimer.java:672)\r\n\tat io.netty.util.HashedWheelTimer$HashedWheelBucket.expireTimeouts(HashedWheelTimer.java:747)\r\n\tat io.netty.util.HashedWheelTimer$Worker.run(HashedWheelTimer.java:472)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Definition_UpdateProfile.the_user_update_the_profile_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Definition_UpdateProfile.close_the_updated_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "To check if the user is able to add the new address",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-add-the-new-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@TC2_Adding_new_address"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "The User launch the Chrome application to add address",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "The user add the new address",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the added address browser",
  "keyword": "And "
});
formatter.match({
  "location": "Definition_NewAddress.the_User_launch_the_Chrome_application_to_add_address()"
});
formatter.result({
  "duration": 89049388162,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to change window state to maximized, current state is minimized\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.43.38\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62033}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e24b92bf9324c9e632bddc4ca1da6ca4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:639)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:903)\r\n\tat com.Crossword.Pages.NewAddress_Crossword_Page.LaunchBrowser(NewAddress_Crossword_Page.java:40)\r\n\tat com.Crossword.StepDefinition.Definition_NewAddress.the_User_launch_the_Chrome_application_to_add_address(Definition_NewAddress.java:19)\r\n\tat ✽.Given The User launch the Chrome application to add address(src/main/resources/feature/Testcase.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Definition_NewAddress.the_user_add_the_new_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Definition_NewAddress.close_the_added_address_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "To check if the user is able to scroll the page",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-scroll-the-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@TC3_Scrolling_Functionality"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "The User launch the Chrome application to scroll down",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "The user scroll the page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the scroll browser",
  "keyword": "And "
});
formatter.match({
  "location": "Definition_Scrolling.the_User_launch_the_Chrome_application_to_scroll_down()"
});
formatter.result({
  "duration": 20132852223,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.43.38\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:214)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:136)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:75)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:163)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:150)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\r\n\tat com.Crossword.Pages.Scrolling_Crossword_Page.LaunchBrowser(Scrolling_Crossword_Page.java:26)\r\n\tat com.Crossword.StepDefinition.Definition_Scrolling.the_User_launch_the_Chrome_application_to_scroll_down(Definition_Scrolling.java:21)\r\n\tat ✽.Given The User launch the Chrome application to scroll down(src/main/resources/feature/Testcase.feature:18)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:9714/status] to be available after 20001 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:86)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:209)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:216)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:136)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:75)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:163)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:150)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:105)\r\n\tat com.Crossword.Pages.Scrolling_Crossword_Page.LaunchBrowser(Scrolling_Crossword_Page.java:26)\r\n\tat com.Crossword.StepDefinition.Definition_Scrolling.the_User_launch_the_Chrome_application_to_scroll_down(Definition_Scrolling.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:84)\r\n\t... 51 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Definition_Scrolling.the_user_scroll_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Definition_Scrolling.close_the_scroll_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "To check if the user is able to slider the price range",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to-slider-the-price-range",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@TC4_Slider_Functionality"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "The User launch the Chrome application to slider",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "The user slider the price range",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Close the slider browser",
  "keyword": "And "
});
formatter.match({
  "location": "Definition_Slider.the_User_launch_the_Chrome_application_to_slider()"
});
formatter.result({
  "duration": 179518607092,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Slider.the_user_slider_the_price_range()"
});
formatter.result({
  "duration": 14702409231,
  "status": "passed"
});
formatter.match({
  "location": "Definition_Slider.close_the_slider_browser()"
});
formatter.result({
  "duration": 13989629056,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "To check if the user is able to",
  "description": "",
  "id": "crossword-website;to-check-if-the-user-is-able-to",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@TC5_To_view_the_details_of_Award_winner"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "The User launch the Chrome application to see award",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The user view the award details",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition_AuthorAward.the_User_launch_the_Chrome_application_to_see_award()"
});
formatter.result({
  "duration": 50106448459,
  "status": "passed"
});
formatter.match({
  "location": "Definition_AuthorAward.the_user_view_the_award_details()"
});
formatter.result({
  "duration": 67538566460,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00274.0.0-alpha-4\u0027, revision: \u0027c2d955b49e\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.43.38\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:62982}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 3516706afd32ab23e0dd03a51c162ee0\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:603)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:639)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:287)\r\n\tat com.Crossword.Pages.AuthorAward_Crossword_Page.award_book(AuthorAward_Crossword_Page.java:56)\r\n\tat com.Crossword.StepDefinition.Definition_AuthorAward.the_user_view_the_award_details(Definition_AuthorAward.java:28)\r\n\tat ✽.Then The user view the award details(src/main/resources/feature/Testcase.feature:31)\r\nCaused by: java.lang.RuntimeException: NettyHttpHandler request execution error\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:61)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.execute(NettyHttpHandler.java:45)\r\n\tat org.openqa.selenium.remote.http.AddSeleniumUserAgent.lambda$apply$0(AddSeleniumUserAgent.java:42)\r\n\tat org.openqa.selenium.remote.http.Filter.lambda$andFinally$1(Filter.java:55)\r\n\tat org.openqa.selenium.remote.http.netty.NettyClient.execute(NettyClient.java:43)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:639)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:643)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:287)\r\n\tat com.Crossword.Pages.AuthorAward_Crossword_Page.award_book(AuthorAward_Crossword_Page.java:56)\r\n\tat com.Crossword.StepDefinition.Definition_AuthorAward.the_user_view_the_award_details(Definition_AuthorAward.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.util.concurrent.ExecutionException: java.util.concurrent.TimeoutException: Request timeout to localhost/127.0.0.1:47824 after 60000 ms\r\n\tat java.util.concurrent.CompletableFuture.reportGet(Unknown Source)\r\n\tat java.util.concurrent.CompletableFuture.get(Unknown Source)\r\n\tat org.asynchttpclient.netty.NettyResponseFuture.get(NettyResponseFuture.java:201)\r\n\tat org.openqa.selenium.remote.http.netty.NettyHttpHandler.makeCall(NettyHttpHandler.java:55)\r\n\t... 53 more\r\nCaused by: java.util.concurrent.TimeoutException: Request timeout to localhost/127.0.0.1:47824 after 60000 ms\r\n\tat org.asynchttpclient.netty.timeout.TimeoutTimerTask.expire(TimeoutTimerTask.java:43)\r\n\tat org.asynchttpclient.netty.timeout.RequestTimeoutTimerTask.run(RequestTimeoutTimerTask.java:50)\r\n\tat io.netty.util.HashedWheelTimer$HashedWheelTimeout.expire(HashedWheelTimer.java:672)\r\n\tat io.netty.util.HashedWheelTimer$HashedWheelBucket.expireTimeouts(HashedWheelTimer.java:747)\r\n\tat io.netty.util.HashedWheelTimer$Worker.run(HashedWheelTimer.java:472)\r\n\tat io.netty.util.concurrent.FastThreadLocalRunnable.run(FastThreadLocalRunnable.java:30)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Definition_AuthorAward.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});