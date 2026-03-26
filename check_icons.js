const https = require('https');
const icons = [
    'tft_item_spearofshojin.tft_set13.png',
    'tft_item_edgeofnight.tft_set13.png',
    'tft_item_redbuff.tft_set13.png',
    'tft_item_steadfastheart.tft_set13.png',
    'tft_item_protectorsvow.tft_set13.png',
    'tft_item_adaptivehelm.tft_set13.png',
    'tft_item_redemption.tft_set13.png',
    'tft_item_guardbreaker.tft_set13.png'
];
const base = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/maps/tft/icons/items/hexcore/';

icons.forEach(icon => {
    https.get(base + icon, (res) => {
        console.log(icon, res.statusCode);
    }).on('error', (e) => {
        console.error(e);
    });
});
