//amaturge avec TypeScript | Gérer la liste déroulante de sélection | Sélectionner une option
// Nous pouvons sélectionner une ou plusieurs options dans l'élément « select » avec locator.selectOption().
// Vous pouvez spécifier l'option, la valeur, l'étiquette ou l'index à sélectionner.

// Syntaxe :
// locator.selectOption(value / label / visible text)
// locator.selectOption({ value: 'valeur de l’attribut value' })
// locator.selectOption({ label: 'valeur de l’attribut label' })
//     // si l'attribut label n'est pas présent, le texte visible peut être fourni,
//     // mais si l'attribut label est présent, le texte visible ne fonctionnera pas ici.
// locator.selectOption({ index: valeurIndex })

import { test } from "@playwright/test";

// Test pour gérer un menu déroulant avec différentes méthodes de sélection
test("Gérer Select Dropdown avec valeur et texte visible", async ({ page }) => {
  
  // Navigue vers le site d'exemple de test
  await page.goto("https://artoftesting.com/samplesiteforselenium");
 // Sélection d’une option dans un menu déroulant par :
  
  // 1. Texte visible directement (ne fonctionne que si l'attribut label n'est pas utilisé)
  // await page.locator("#testingDropdown").selectOption("Database Testing");

  // 2. Valeur de l’attribut value
  // await page.locator("#testingDropdown").selectOption({ value: 'Performance' });

  // 3. Label de l'option (affiché à l'utilisateur)
  // await page.locator("#testingDropdown").selectOption({ label: 'Database Testing' });

  // 4. Index (position de l'option, à partir de 0)
  await page.locator("#testingDropdown").selectOption({ index: 2 });
});


// Test pour gérer une sélection dans un menu déroulant situé dans un iframe
test("Gérer Select Dropdown avec Label dans un iframe", async ({ page }) => {

  // Accès à la page contenant un iframe avec un menu déroulant
  await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label");

  // Utilise frameLocator pour cibler le champ de sélection dans l’iframe 'iframeResult'
  await page
    .frameLocator('iframe[name="iframeResult"]')                   // Localiser l'iframe
    .getByLabel('Choose a car:')                                   // Trouver le champ de sélection par son label
    .selectOption({ label: 'Audi (Auto Union Deutschland Ingolstadt)' }); //echec // Sélectionner une option par son label
});