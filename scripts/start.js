const { exec } = require('child_process');

exec(`next start -p ${process.env.APP_PORT || '3000'} -H ${process.env.APP_IP || '127.0.0.1'}`);