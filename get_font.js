const https = require('https');
https.get('https://techbeeai.framer.website/', res => {
  let d = '';
  res.on('data', c => d+=c);
  res.on('end', () => {
    require('fs').writeFileSync('framer_homepage.html', d);
    console.log('Saved to framer_homepage.html');
  });
});
