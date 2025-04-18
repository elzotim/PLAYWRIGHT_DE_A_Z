import { test, expect } from '@playwright/test';

test("Practice of getBy methods", async ({ page }) => {
    // Accès à la page de connexion
    //await page.goto("https://demo.nopcommerce.com/login");
  
    // Remplir le champ email par son label
    //await page.getByLabel("Email:", { exact: true }).fill("testcodeautomate@gmail.com");
  
    // Afficher le texte "New Customer"
    //console.log(await page.getByText("New Customer", { exact: true }).textContent());
  
    // Cliquer sur l’image avec un texte alternatif précis
    //await page.getByAltText("nopCommerce demo store").click();
  
    //Cliquer sur un lien avec un titre spécifique
    //await page.getByTitle("Showproducts incategoryElectronics").first().click();
  
    // Remplir le champ de recherche avec le placeholder
    //await page.getByPlaceholder("search store").fill("Mobile");
  //await page.getByTestId('my-element') // va chercher data-test="my-element"
    // Cliquer sur le bouton "Search"
    //await page.getByRole("button", { name: "Search" }).click();
    // Accès à un autre site de test (saucedemo)
    await page.goto("https://www.saucedemo.com/");
  
    // Remplir le champ username avec un testID
    await page.getByTestId("username").fill("TestCodeAutome");
    await page.pause();
  });