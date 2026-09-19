const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const screens = [
  { file: 'tela-01-dashboard.html', output: 'trophe_screen_01_dashboard.png' },
  { file: 'tela-03-kanban.html', output: 'trophe_screen_02_kanban.png' },
  { file: 'tela-04-whatsapp.html', output: 'trophe_screen_03_whatsapp.png' },
  { file: 'tela-02-agenda.html', output: 'trophe_screen_04_agenda.png' },
  { file: 'tela-06-automacoes.html', output: 'trophe_screen_05_automacoes.png' },
  { file: 'tela-05-prontuario.html', output: 'trophe_screen_06_prontuario.png' },
  { file: 'tela-07-resgate.html', output: 'trophe_screen_07_resgate.png' },
  { file: 'tela-08-integracoes.html', output: 'trophe_screen_08_integracoes.png' },
];

(async () => {
  console.log('Iniciando captura em alta resolução (2x DPR)...');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 840,
    deviceScaleFactor: 2 // Alta nitidez (Retina / 4K)
  });

  const outDir = path.resolve(__dirname, '../images/screens');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const s of screens) {
    const url = `http://localhost:3030/telas-sistema/${s.file}`;
    console.log(`Carregando ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Localiza o frame da tela para recorte perfeito
    const frame = await page.$('.viewport-frame');
    const outPath = path.join(outDir, s.output);

    if (frame) {
      await frame.screenshot({ path: outPath, omitBackground: true });
    } else {
      await page.screenshot({ path: outPath, omitBackground: true });
    }
    console.log(`Salvo: ${outPath}`);
  }

  await browser.close();
  console.log('Todas as 8 telas foram capturadas com sucesso!');
})();
