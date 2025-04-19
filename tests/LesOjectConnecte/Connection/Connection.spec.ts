// On importe les modules nécessaires depuis Playwright Test.
// - `test` est la fonction principale pour définir un test.
// - `chromium` permettrait de lancer un navigateur Chromium manuellement (non utilisé ici directement).
// - `expect` est utilisé pour faire des assertions (non utilisé dans ce test mais peut servir dans d'autres).
import { test, chromium, expect } from '@playwright/test';

// On importe la classe `Connection` depuis un fichier situé dans un dossier relatif (`../../LesObjet/Connection`).
// Cette classe est censée encapsuler la logique liée à la page de connexion (comme les sélecteurs et actions).
import { Connection } from '../../../LesObjet/Connection';
// Définition du test avec une description claire. Le test est une fonction asynchrone qui reçoit un objet `{page}`.
// `page` est une instance de navigateur fournie automatiquement par Playwright pour interagir avec la page web.
test('Saisi usename et MDP et clique sur le bouton connecte ', async ({ page }) => {

    // Déclaration de l'URL du site à tester : ici c’est la page de login de l’application Saucedemo.
    const url = "https://www.saucedemo.com/";

    // Création d'une instance de l’objet `Connection`, en lui passant l’objet `page`.
    // Cela permet d'utiliser les méthodes définies dans `Connection` pour interagir avec la page.
    const ConnectionObjet = new Connection(page);

    // Appel de la méthode `OuvrirPageConnection` de l’objet `ConnectionObjet`, en lui passant l'URL.
    // Cette méthode est probablement une abstraction pour faire `page.goto(url)` à l'intérieur de la classe.
    await ConnectionObjet.OuvrirPageConnection(url);

    // Appel de la méthode `Connexion` avec les identifiants utilisateur (`standard_user` et `secret_sauce`).
    // Cette méthode est censée remplir les champs "username" et "password", puis cliquer sur le bouton de connexion.
    await ConnectionObjet.Connexion("standard_user", "secret_sauce");

});
