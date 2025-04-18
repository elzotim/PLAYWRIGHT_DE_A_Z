// Importe l'objet 'test' depuis le module Playwright Test

import {test,chromium, expect}  from '@playwright/test' ;
test.describe('les hook', () => {

test.beforeAll('Avant tout execution ',async()=>{
    
    console.log("execute moi en premier ");
    
})
test.beforeEach('Avant tout bloc ', async()=>{

    console.log("execute moi avant chaque bloc ");
    
})
test('bloc1', async () => {
 // Crée un nouveau contexte de navigateur
 const browser = await chromium.launch();
 const context = await browser.newContext();
 // Crée une nouvelle page dans ce contexte
 const page = await context.newPage();
 
 // Navigue vers l'URL de test
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(await page.title());
 await page.screenshot({ path: 'Acueille.png' });})


 test('bloc2', async () => {
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
});
test.afterAll('Aprés toutes les éxecutions ',async()=>{
    
    console.log("execute moi en dernier des dernier ");
    
})
test.afterEach('Aprés  execution des bloc  ',async()=>{
    
    console.log("execute moi en dernier ");
    
})