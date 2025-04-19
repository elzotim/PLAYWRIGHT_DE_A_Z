import {Locator, Page, test}  from '@playwright/test' ;
export class Connection {

    // Déclaration des propriétés de la classe :
    // - `page` représente la page Playwright.
    // - `SaisiUsername`, `SaisiMdp`, `ButtonConnex` sont des sélecteurs pour les champs de saisie et le bouton.
    readonly page: Page;
    readonly SaisiUsername: Locator;
    readonly SaisiMdp: Locator;
    readonly ButtonConnex: Locator;

    // Le constructeur prend un objet `page` (fourni automatiquement par Playwright dans le test).
    // Il initialise les locators en ciblant les éléments HTML grâce à leurs IDs.
    constructor(page: Page) {
        this.page = page;

        // Localisateur pour le champ "Nom d'utilisateur" (ID = user-name)
        this.SaisiUsername = page.locator("#user-name");

        // Localisateur pour le champ "Mot de passe" (ID = password)
        this.SaisiMdp = page.locator("#password");

        // Localisateur pour le bouton de connexion (ID = login-button)
        this.ButtonConnex = page.locator("id=login-button");
    }
    
    // Méthode pour ouvrir l’URL de la page de connexion.
    // Elle utilise `page.goto()` pour naviguer vers l’adresse passée en paramètre.
    async OuvrirPageConnection(url: string) {
        await this.page.goto(url);
    }

    // Méthode pour effectuer la connexion :
    // - Remplit le champ "Nom d'utilisateur"
    // - Remplit le champ "Mot de passe"
    // - Clique sur le bouton de connexion
    async Connexion(UserNameValeur: string, MdpValeur: string) {
        await this.SaisiUsername.fill(UserNameValeur);   // Saisie du nom d'utilisateur
        await this.SaisiMdp.fill(MdpValeur);             // Saisie du mot de passe
        await this.ButtonConnex.click();                 // Clic sur le bouton pour se connecter
    }
}