const fs = require('fs');
const path = require('path');

test('HTML deve conter título e imagem', () => {
    const htmlPath = path.join(__dirname, '../src/index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    expect(html).toContain('<h1>Bem-vindo ao meu projeto!</h1>');
    expect(html).toContain('<img src="https://cdn.eadplataforma.app/client/dcpi1/upload/crop/product/photo/890bb2a481fb3a9a1e5acad2ea61e44f_introducao-a-freudjpg.jpg-product-photo-detail-mobile.jpg"');
});
