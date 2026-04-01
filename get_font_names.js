const fs = require('fs');
const html = fs.readFileSync('framer_homepage.html', 'utf8');
const r = html.match(/"fontFamily":"[a-zA-Z\s]+"/g) || [];
console.log([...new Set(r)]);
