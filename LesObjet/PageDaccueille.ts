import {Locator, Page, test}  from '@playwright/test' ;
export  class PageAcueille {
    readonly page: Page;
    readonly AjoutProduitAuPanier: Locator;
    readonly SupprimeProduitPanier: Locator;
    readonly MonPanier: Locator;
    readonly titledelaPage : Locator;

    constructor(page: Page) {
        this.page = page;
        this.titledelaPage = page.getByText('Swag Labs')
        this.AjoutProduitAuPanier = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.SupprimeProduitPanier= page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');  
        this.MonPanier = page.locator('[data-test="shopping-cart-link"]');
    }
    async AjoutPanier() {
        await this.AjoutProduitAuPanier.click(); 
    }
    async voirPanier(url: string) {
        await this.MonPanier.click(); 
    }

    async SuprimPanier() {
        await this.SupprimeProduitPanier.click(); 
    }
    
}