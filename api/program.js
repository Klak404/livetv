// api/program.js
import { JSDOM } from 'jsdom';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://www.digea.gr/el/tileoptikoi-stathmoi/ilektronikos-odigos-programmatos');
    const html = await response.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const tableRows = document.querySelectorAll('.epg-program-table tbody tr');

    const data = [];

    tableRows.forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells.length >= 3) {
        data.push({
          time: cells[0].textContent.trim(),
          channel: cells[1].textContent.trim(),
          title: cells[2].textContent.trim()
        });
      }
    });

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Σφάλμα κατά το scraping.' });
  }
}
