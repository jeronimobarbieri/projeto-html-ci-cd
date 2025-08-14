const fs = require('fs');
const path = require('path');

test('HTML deve conter título e contador', () => {
    const htmlPath = path.join(__dirname, '../src/index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    expect(html).toContain('<h1>Blog de Psicanálise Clínica</h1>');
    expect(html).toContain('id="contador"');
});