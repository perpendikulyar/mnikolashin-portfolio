module.exports = {
  apps: [{
    name: 'mnikolashin-portfolio',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/michael-nikolashin.ru/html/mnikolashin-portfolio',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/www/michael-nikolashin.ru/logs/pm2-error.log',
    out_file: '/var/www/michael-nolashin.ru/logs/pm2-out.log',
    log_file: '/var/www/michael-nikolashin.ru/logs/pm2-combined.log',
    time: true
  }]
};
