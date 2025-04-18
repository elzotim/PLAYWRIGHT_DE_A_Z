import { test, expect, Page, Dialog } from "@playwright/test";

test("Gérer les alertes JS", async ({ page }) => {

  // Aller sur la page contenant des alertes JavaScript
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Écouter les événements de type "dialog" (alerte JS)
  page.on("dialog", dialog => {
    // Vérifie que le type du dialogue est bien une alerte
    expect(dialog.type()).toEqual("alert");

    // Vérifie le message affiché dans l'alerte
    expect(dialog.message()).toEqual("I am a JS Alert");

    // Accepter l’alerte (équivalent à cliquer sur "OK")
    dialog.accept();
  });

  // Cliquer sur le bouton qui déclenche l’alerte
  await page.getByRole('button', { name: 'Click for JS Alert' }).click();

  // Vérifier que le texte de confirmation est bien affiché après avoir accepté l’alerte
  await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
});
test('Handle Confirm Dialog', async ({ page }: { page: Page }) => {
    // Aller sur la page contenant les alertes JS
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  
    // Intercepter la boîte de dialogue de confirmation
    page.on('dialog', (dialog: Dialog) => {
      expect(dialog.type()).toEqual('confirm'); // Vérifie le type
      expect(dialog.message()).toEqual('I am a JS Confirm'); // Vérifie le message
      dialog.dismiss(); // Clique sur "Annuler"
    });
  
    // Cliquer sur le bouton qui déclenche le JS Confirm
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
  });
  test('Handle Prompt Dialog with custom input and verify result', async ({ page }: { page: Page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  
    page.on('dialog', (dialog: Dialog) => {
      expect(dialog.type()).toEqual('prompt'); // Vérifie que c'est un prompt
      expect(dialog.message()).toEqual('I am a JS prompt'); // Vérifie le message
      expect(dialog.defaultValue()).toEqual(''); // Vérifie que la valeur par défaut est vide
  
      dialog.accept('Hello World'); // Répond avec "Hello World"
    });
  
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
  
    // Vérifie que le texte affiché est bien : "You entered: Hello World"
    const result = await page.locator('#result');
    await expect(result).toHaveText('You entered: Hello World');
  });