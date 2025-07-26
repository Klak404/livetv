import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  try {
    const url = 'https://www.digea.gr/el/tileoptikoi-stathmoi/ilektronikos-odigos-programmatos';
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
                      '(KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept-Language': 'el-GR,el;q=0.9,en-US;q=0.8,en;q=0.7',
        'Referer': 'https://www.digea.gr/'
      }
    });

    const $ = cheerio.load(response.data);

    let channels = [];

    $('.programme__wrapper').each((i, el) => {
      if (i >= 3) return false; // μόνο 3 κανάλια για δοκιμή
      const name = $(el).find('.programme__header h3').text().trim();

      let shows = [];
      $(el).find('.programme__item').each((j, show) => {
        const time = $(show).find('.programme__time').text().trim();
        const title = $(show).find('.programme__title').text().trim();
        shows.push({ time, title });
      });

      channels.push({ name, shows });
    });

    res.status(200).json(channels);

  } catch (error) {
    console.error('Error fetching program:', error.message);
    res.status(500).json({ error: 'Αποτυχία φόρτωσης προγράμματος' });
  }
}
