import {test,chromium, expect}  from '@playwright/test' ;
import { log } from 'console';
import { setServers } from 'dns';

test('@Web Browser Context-Validating Error login', async () => {
 // Crée un nouveau contexte de navigateur
 const browser = await chromium.launch();
 const context = await browser.newContext();
 // Crée une nouvelle page dans ce contexte
 const page = await context.newPage();
 
 // Déclare les localisateurs pour les champs de saisie et les boutons
 const userName = page.locator('#username');
 const signIn = page.locator("#signInBtn");
 const cardTitles = page.locator(".card-body a");

 // Log les URL des requêtes réseau et des réponses
 page.on('request', request => console.log(request.url()));
 page.on('response', response => console.log(response.url(), response.status()));

 // Navigue vers l'URL de test
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await page.title());
 await page.screenshot({ path: 'Acueille.png' });})

 test.only("Practice of Locator Method with Options", async ({ page }) => {

   // 1. Accès au site
   await page.goto("https://www.saucedemo.com/");
 
   // 2. Remplit le champ username via un sélecteur combiné avec "has"
   await page.locator(".form_group", { has: page.locator("input#user-name") }).click();
   await page.locator(".form_group", { has: page.locator("input#user-name") }).pressSequentially("standard_user");
 
   // 3. Mot de passe + connexion
   await page.locator('[data-test="password"]').fill('secret_sauce');
   await page.locator('[data-test="login-button"]').click();
   await page.waitForLoadState('networkidle'); // Attend que le réseau soit calme (page chargée)
 
   // 4. Récupération de la liste des produits
   const products = await page.locator(".inventory_item");
   await page.locator(".inventory_item").first().waitFor(); // Attendre que le premier produit soit visible
   const Nombre_Produit = await products.count(); // Nombre total de produits
   console.log(Nombre_Produit);
 
   // 5. Ajoute un produit spécifique au panier (Sauce Labs Backpack)
   const productName = "Sauce Labs Backpack";
   for (let i = 0; i < Nombre_Produit; ++i) {
     const nom = await products.nth(i).locator('[data-test="item-4-title-link"]').textContent();
     if (nom === productName) {
       await products.nth(i).locator("text= Add To Cart").click();
       break;
     }
   }
 
   // 6. Vérifie que l'on est bien sur la page panier
   await page.locator('[data-test="shopping-cart-link"]').click();
   expect(await page.locator('[data-test="title"]').isVisible()).toBeTruthy();
 
   // 7. Retour à la page précédente (produits)
   await page.goBack();
   await expect(page.locator(".inventory_item").first()).toBeVisible();
 
   // 8. Récupération et stockage de tous les prix
   const nombres: number[] = [];
   for (let i = 0; i < Nombre_Produit; i++) {
     const prix = await products.nth(i).locator('.inventory_item_price').textContent();
     if (prix) {
       const valeur = parseFloat(prix.replace('$', ''));
       nombres.push(valeur); // Ajoute le prix à la liste
       await products.nth(i).locator('.inventory_item_price').click(); // Clique sur le prix (action discutable ici)
     }
   }
 
   // 9. Recherche du prix minimum
   console.log(nombres.length);
   const minPrix = Math.min(...nombres);
   console.log("Le prix le plus bas est : $$" + minPrix);
 
   // 10. Clique sur le produit qui a ce prix minimum
   for (let i = 0; i < nombres.length; i++) {
     const priceLocator = products.nth(i).locator(".inventory_item_price");
     await expect(priceLocator).toBeVisible({ timeout: 5000 });
     const text = await priceLocator.textContent();
     console.log(text);
 
     if (text && parseFloat(text.replace('$', '')) === minPrix) {
       await products.nth(i).locator("button:has-text('Add to cart')").click();
       break;
     }
   }
 
   // 11. Vérifie que le panier est toujours accessible
   await page.locator('[data-test="shopping-cart-link"]').click();
   expect(await page.locator('[data-test="title"]').isVisible()).toBeTruthy();
 
   // Pause le test pour debug manuel dans le navigateur
   page.pause();
 });