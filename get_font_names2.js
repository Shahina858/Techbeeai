const fs = require('fs');
const html = fs.readFileSync('framer_homepage.html', 'utf8');
const r = html.match(/font-family:([^;}]+)/gi) || [];
console.log([...new Set(r)]);
