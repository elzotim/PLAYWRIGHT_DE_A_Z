// On importe les modules nécessaires depuis Playwright Test.
// - `test` est la fonction principale pour définir un test.
// - `chromium` permettrait de lancer un navigateur Chromium manuellement (non utilisé ici directement).
// - `expect` est utilisé pour faire des assertions (non utilisé dans ce test mais peut servir dans d'autres).
import { test, chromium, expect } from '@playwright/test';

import { Connection } from '../../../LesObjet/Connection';
import {PageAcueille}  from '../../../LesObjet/PageDaccueille';
test('Saisi usename et MDP et clique sur le bouton connecte et a', async ({ page }) => {

    const url = "https://www.saucedemo.com/";
    const ConnectionObjet = new Connection(page);
    const PageDaccueilleObjet = new PageAcueille(page)
    await ConnectionObjet.OuvrirPageConnection(url);
    await ConnectionObjet.Connexion("standard_user", "secret_sauce");
    await expect(PageDaccueilleObjet.titledelaPage).toHaveText("Swag Labs")

});
