$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/invoicing.feature");
formatter.feature({
  "name": "Sample",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "login as a manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user login as a manager using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lunch_InvoicingManager@info.com",
        "LD686gfX22"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login as a manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user login as a manager using \"Lunch_InvoicingManager@info.com\" and \"LD686gfX22\"",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStepDef.user_login_as_a_manager_using_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});