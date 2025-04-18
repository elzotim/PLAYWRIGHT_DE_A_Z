import {test,chromium, expect}  from '@playwright/test' ;
import { log } from 'console';
import { setServers } from 'dns';

test.beforeEach("Practice of Locator Method with Options avat tout ", async ({ page }) => {

   // 1. Accès au site
   await page.goto("https://www.saucedemo.com/");
 
   // 2. Remplit le champ username via un sélecteur combiné avec "has"
   await page.locator(".form_group", { has: page.locator("input#user-name") }).click();
   await page.locator(".form_group", { has: page.locator("input#user-name") }).pressSequentially("standard_user");
 
   // 3. Mot de passe + connexion
   await page.locator('[data-test="password"]').fill('secret_sauce');
   await page.locator('[data-test="login-button"]').click();
   await page.waitForLoadState('networkidle'); // Attend que le réseau soit calme (page chargée)



   
})