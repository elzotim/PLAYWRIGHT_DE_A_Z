// Importe l'objet 'test' depuis le module Playwright Test
import { test } from "@playwright/test";

// Ignore les tests suivants si le nom du navigateur est 'chromium'
//test.skip(({ browserName }) => browserName === "chromium");

// Groupe les tests sous le bloc 'describe' avec le nom "Practice of Describe"
test.describe("Practice of Describe", async () => {

  // Premier test nommé "Practice Test 1"
  test("Practice Test 1", async ({ page, browserName }) => {
    // Le test est censé échouer sur Firefox
    test.fail(browserName === 'firefox')
        // Le test est censé échouer sur tout navigateur
        test.fail();
    // Ignore les tests suivants si le nom du navigateur est 'chromium'
test.skip(({ browserName }) => browserName === "chromium");
    // Affiche dans la console que le test 1 commence
    console.log("Starting Practice Test 1");
    // Affiche dans la console que le test 1 se termine
    console.log("Ending Practice Test 1");
  });

  // Deuxième test nommé "Practice Test 2"
  test("Practice Test 2", async ({ page }) => {
    // Affiche dans la console que le test 2 commence
    console.log("Starting Practice Test 2");
    // Affiche dans la console que le test 2 se termine
    console.log("Ending Practice Test 2");
  });

  // Troisième test nommé "Practice Test 3"
  test("Practice Test 3", async ({ page }) => {
     // Ignore les tests suivants si le nom du navigateur est 'chromium'
   
    test.slow();
    // Affiche dans la console que le test 3 commence
    console.log("Starting Practice Test 3");
    // Affiche dans la console que le test 3 se termine
    console.log("Ending Practice Test 3");
  });

});
test.describe("igonrer les cas de test", async () => {
// Ignore les tests suivants si le nom du navigateur est 'chromium'
test.skip(({ browserName }) => browserName === "chromium");
    // Premier test nommé "Practice Test 1"
    test("Practice Test DD1", async ({ page }) => {
// Ignore les tests 
        test.skip();
      // Ignore les tests suivants si le nom du navigateur est 'chromium'
  test.skip(({ browserName }) => browserName === "chromium");
      // Affiche dans la console que le test 1 commence
      console.log("Starting Practice Test 1");
      // Affiche dans la console que le test 1 se termine
      console.log("Ending Practice Test 1");
    });
  
    // Deuxième test nommé "Practice Test 2"
    test("Practice Test''4''", async ({ page }) => {
      // Affiche dans la console que le test 2 commence
      console.log("Starting Practice Test 2");
      // Affiche dans la console que le test 2 se termine
      console.log("Ending Practice Test 2");
    });
  
    // Troisième test nommé "Practice Test 3"
    test("Practice Test SS3", async ({ page }) => {
       // Ignore les tests suivants si le nom du navigateur est 'chromium'
      test.skip();
      test.slow();
      // Affiche dans la console que le test 3 commence
      console.log("Starting Practice Test 3");
      // Affiche dans la console que le test 3 se termine
      console.log("Ending Practice Test 3");
    });
  

    test.describe("un element qui doit etre corriger donc j'ignore l'execution", async () => {
    test.fixme("cas de test test doit etre corriger on mets dans fixm", async ({ page , browserName}) => {
        // Ignore les tests suivants si le nom du navigateur est 'chromium'
      /// pour tous les navigateur  
      // test.fixme();
      ////pour chrome 
      test.fixme(({ browserName }) => browserName === "chromium");
       
       // Affiche dans la console que le test 3 commence
       console.log("Starting Practice Test 3");
       // Affiche dans la console que le test 3 se termine
       console.log("Ending Practice Test 3");
     });
   
  });
});