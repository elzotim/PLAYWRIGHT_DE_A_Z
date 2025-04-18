import { test } from '@playwright/test';
 
test.only('ajoute un fichier téléchargé au rapport', async ({ page }, testInfo) => {
    // 1. Naviguer vers la page souhaitée
    await page.goto('https://owasp.org/www-project-web-security-testing-guide/');
    // Cliquer sur l’onglet "Release Versions"
    await page.getByRole('tab', { name: 'Release Versions' }).click();
    // 2. Attendre le téléchargement du fichier
    const screenshot = await page.screenshot();
    const downloadPromise = page.waitForEvent('download'); // Écouter l'événement de téléchargement
    await page.getByRole('link', { name: 'Download the v4.2 PDF' }).click(); // Cliquer sur le lien de téléchargement
    const download = await downloadPromise; // Récupérer l'objet de téléchargement une fois terminé
    // 3. Ajouter le PDF au rapport de test
    const path = await download.path(); // Obtenir le chemin local du fichier téléchargé
if (path) {
    await testInfo.attach(download.suggestedFilename(), { path });
}

   
    await page.pause();
});

test('télécharge plusieurs fichiers PDF et les ajoute au rapport', async ({ page }, testInfo) => {
    // 1. Aller sur la page
    await page.goto('https://owasp.org/www-project-web-security-testing-guide/');
    await page.getByRole('tab', { name: 'Release Versions' }).click();

    // 2. Sélectionner tous les liens contenant "Download"
    const links = await page.locator('a:has-text("Download")').all();
    const screenshot = await page.screenshot();
    for (const link of links) {
        // 3. Attendre le téléchargement
        const downloadPromise = page.waitForEvent('download');
        await link.click();
        const download = await downloadPromise;

        // 4. Attacher chaque fichier au rapport
        const path = await download.path();
        if (path) {
            console.log(`📁 Chemin local : ${path}`);
            await testInfo.attach(download.suggestedFilename(), {
                path,
            });
        }
    }
});