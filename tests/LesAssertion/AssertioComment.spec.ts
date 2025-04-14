import {test,chromium, expect}  from '@playwright/test' ;
import { log } from 'console';
import { setServers } from 'dns';

test('@Web Browser Context-Validating Error login', async () => {
    // Crée un nouveau contexte de navigateur
 const browser = await chromium.launch();
 const context = await browser.newContext();
 // Crée une nouvelle page dans ce contexte
 const page = await context.newPage();
    // Types d'Assertions

// Les assertions sont classées en deux catégories :

// 1 - Assertions avec re-tentatives automatiques
// Ces assertions vont réessayer automatiquement jusqu'à ce que l'assertion réussisse, ou que le délai d'expiration soit atteint.
// Notez que ces assertions sont asynchrones, il faut donc les "await".

// 2 - Assertions sans re-tentatives
// Ces assertions permettent de tester des conditions, mais ne réessaient pas automatiquement.
// Très souvent, les pages web affichent des informations de manière asynchrone,
// et utiliser des assertions sans re-tentatives peut rendre les tests instables (flaky).

// Remarque : Il est recommandé d’utiliser les assertions avec re-tentatives automatiques chaque fois que possible.

// ------------------------------------------------------------
// Assertions avec re-tentatives automatiques couramment utilisées :

await expect(await page.locator('[data-test="title"]')).toBeEnabled(); // Vérifie que l’élément est activé
await expect(await page.locator('[data-test="title"]')).toBeDisabled(); // Vérifie que l’élément est désactivé
await expect(await page.locator('[data-test="title"]')).toBeVisible(); // Vérifie que l’élément est visible
await expect(await page.locator('[data-test="title"]')).toBeHidden(); // Vérifie que l’élément est caché
await expect(await page.locator('[data-test="title"]')).toHaveText('text'); // Vérifie que l’élément contient le texte spécifié
await expect(await page.locator('[data-test="title"]')).toHaveAttribute('attribute', 'AttributeValue'); // Vérifie la valeur d'un attribut
await expect(await page.locator('[data-test="title"]')).toHaveId('IdValue'); // Vérifie que l’élément a l’ID spécifié
await expect(await page.locator('[data-test="title"]')).toHaveClass('ClassValue'); // Vérifie que l’élément a une classe CSS spécifiée
await expect(page).toHaveURL('URLValue'); // Vérifie l’URL de la page
await expect(await page.locator('[data-test="title"]')).toHaveCount(10); // Vérifie qu’un nombre spécifique d’éléments est présent sur la page
await expect(page).toHaveTitle('TitleValue'); // Vérifie le titre de la page

// ------------------------------------------------------------
// Assertions sans re-tentatives :

expect(await page.locator('[data-test="title"]')).toBe(1); // Vérifie que la valeur est strictement égale
//expect(await page.locator('[data-test="title"]')).toBeLessThan(100); // Vérifie que la valeur est inférieure à une autre

// ------------------------------------------------------------
// Matchers Négatifs :

expect(10).not.toEqual(0); // Vérifie que la valeur n'est pas égale à 0
await expect(await page.locator('[data-test="title"]')).not.toHaveText('some text'); // Vérifie que l’élément ne contient pas le texte spécifié

// ------------------------------------------------------------
// Message d'erreur personnalisé :

await expect(await page.locator('[data-test="title"]'), 'Message d’erreur personnalisé').not.toHaveText('some text');

// ------------------------------------------------------------
// Assertion souple (Soft Assertion) :

// Par défaut, une assertion échouée interrompt l’exécution du test.
// Playwright permet aussi des assertions souples : une assertion échouée n’arrête pas l’exécution, mais marque le test comme échoué.

expect.soft(2).not.toEqual(0);
await expect.soft(await page.locator('[data-test="title"]')).toHaveText('some text');
});