module.exports = (shipit) => {
  // Load shipit-deploy tasks
  // eslint-disable-next-line global-require
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      deployTo: '/var/www/',
      repositoryUrl: 'git@github.com:moorebrett0/brain-token.git',
      key: '~/.ssh/deploy.rsa',
    },
    production: {
      servers: 'brain@52.36.9.83',
      branch: 'main',
      key: '~/.ssh/brain_token.pem',
    },
  });
};
