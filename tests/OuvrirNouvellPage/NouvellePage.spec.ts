/*
Instance de BrowserContext isolée, créée pour chaque test. Les contextes étant isolés les uns des autres, chaque test bénéficie d'un nouvel environnement, même lorsque plusieurs tests sont exécutés dans un même navigateur.
Le contexte ne partagera pas les cookies/cache avec d'autres contextes de navigateur.
L'événement de page sur les contextes de navigateur peut être utilisé pour obtenir de 
*nouvelles pages créées dans le contexte. 
Cela peut être utilisé pour gérer les nouvelles pages ouvertes par les liens target="_blank".*/
import { expect, test } from '@playwright/test';

// Début du test nommé "Handle New Page"
test('Handle New Page', async ({ context }) => {

  // Crée une nouvelle page (onglet)
  const page = await context.newPage();

  // Navigue vers la page de test
  await page.goto('https://testpages.eviltester.com/styled/windows-test.html');

  // Vérifie que le titre de la page est correct
  await expect(page).toHaveTitle('Windows Example Test');

  // Prépare l'écoute d'un événement d'ouverture de nouvelle page
  const pagePromise = context.waitForEvent('page');

  // Clique sur un élément pour ouvrir une nouvelle page
  await page.locator('#gobasicajax').click();

  // Récupère la nouvelle page qui s'est ouverte
  const newPage = await pagePromise;

  // Clique sur un bouton dans la nouvelle page
  await newPage.locator("[value='Code In It']").click();
    
  // (Retour sur la page principale) Clique sur un lien "About"
  await page.getByRole('link', { name: 'About' }).click();
});
