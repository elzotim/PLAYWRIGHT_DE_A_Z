import { test, expect } from '@playwright/test';

test("Practice of getBy methods", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");
  
    // Vérifie que le bouton de connexion est présent une seule fois sur la page
await expect(page.locator('[data-test="login-button"]')).toHaveCount(1);

// Vérifie que le bouton de connexion est activé (cliquable)
await expect(page.locator('[data-test="login-button"]')).toBeEnabled();

// Assertion douce : vérifie que le bouton de connexion est désactivé, mais n'arrête pas le test en cas d’échec
await expect.soft(page.locator('[data-test="login-button"]')).toBeDisabled();

// Vérifie que le bouton de connexion est visible sur la page
await expect(page.locator('[data-test="login-button"]')).toBeVisible();

// Vérifie que le bouton de connexion est masqué
await expect(page.locator('[data-test="login-button"]')).toBeHidden();

// Vérifie que le texte du bouton de connexion est "Login"
await expect(page.locator('[data-test="login-button"]')).toHaveText("Login");

// Vérifie que le bouton a un attribut "name" avec la valeur "login-button"
await expect(page.locator('[data-test="login-button"]')).toHaveAttribute("name", "login-button");

// Vérifie que le bouton contient l'ID "login-button"
await expect(page.locator('[data-test="login-button"]')).toHaveId("login-button");

// Vérifie que le bouton a une classe CSS spécifique
await expect(page.locator('[data-test="login-button"]')).toHaveClass("submit-button btn_action");

// Vérifie que l'URL actuelle est bien celle du site attendu
await expect(page).toHaveURL("https://www.saucedemo.com/");

// Vérifie que le titre de la page est "Swag Labs"
await expect(page).toHaveTitle("Swag Labs");

// Assertion classique (non-retry) : vérifie que la valeur 5 est égale à 4 → cette ligne est commentée
// expect(5).toBe(4);

// Assertion avec message personnalisé : si le titre n'est pas "Swag labs", un message personnalisé s'affichera
await expect(page, "This is Custom error message for practice").not.toHaveTitle("Swag labs");

  });