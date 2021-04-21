const { writeFileSync } = require('fs');
const domain = process.argv[2];

if (!domain) {
  throw new Error('Domain is missing!');
}

const data = `
RewriteEngine On
RewriteCond %{HTTP_HOST} http://${domain} [NC]
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://${domain}/$1 [R,L]
`;

writeFileSync('./public/.htaccess', data);

console.log('.htaccess for HTTPS was created successfully!');
