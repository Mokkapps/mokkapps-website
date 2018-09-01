const base = {
  name: 'Mokkapps',
  url: 'https://github.com/Mokkapps/website',
  desc: 'Portfolio website from Michael Hoffmann',
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - ${base.desc}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${base.desc}`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: `${base.desc}`,

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  characteristics: [
    { text: 'Mobile, Game & Frontend Developer', emoji: '💻', ariaLabel: 'pc' },
    { text: 'Blogger', emoji: '📝', ariaLabel: 'memo' },
    { text: 'Video Game Enthusiast', emoji: '🎮', ariaLabel: 'games' },
    { text: 'Beekeeper', emoji: '🐝', ariaLabel: 'bee' },
  ],

  projects: [
    {
      title: 'Supermarket Challenge',
      description: {
        short: 'Supermarket Challenge delivers an addictive gameplay experience!',
        long: `
        Challenge yourself and try to sustain at the supermarket cash register. Set a high score and share it with your friends for a new challenge.

        Alternatively you can try one of the 12 levels to get a better gameplay feeling.
        
        You have to scan articles, enter the correct barcode for fruits and throw bombs away before they explode.
        
        Surprise boxes can include useful extras or have a negative surprise for you. 
        
        Be careful! Unscanned articles in the shopping basket or articles which are thrown out of the screen, cost a life. You have three lifes per round.`
      },
      usedTechnologies: ['Corona SDK'],
      imageName: 'supermarket-challenge',
      urls: {
        googlePlay: 'https://play.google.com/store/apps/details?id=de.mokkapps.supermarketchallenge',
        appStore: 'https://itunes.apple.com/de/app/supermarket-challenge/id1207665675'
      }
    },
    {
      title: 'Standup Picker',
      description: {
        short: 'A desktop application which can be used in Scrum teams to initiate the daily Scrum meeting',
        long: ''
      },
      usedTechnologies: ['Angular 5, Electron'],
      imageName: 'standup-picker',
      urls: {
        github: 'https://github.com/Mokkapps/scrum-daily-standup-picker'
      }
    },
    {
      title: 'RebelGamer Mobile App',
      description: {
        short: 'iOS & Android app for the gaming blog www.rebelgamer.de',
        long: ''
      },
      usedTechnologies: ['React Native'],
      imageName: 'rebelgamer',
      urls: {
        github: 'https://github.com/Mokkapps/rebelgamer-mobile-app',
        googlePlay: 'https://play.google.com/store/apps/details?id=de.rebelgamer.RebelGamerRSS',
        appStore: 'https://itunes.apple.com/de/app/rebelgamer-news-fur-gamer/id1187403828'
      }
    },
    {
      title: 'GitHub Traffic Viewer',
      description: {
        short: 'A website which shows a list of traffic graphs of your own GitHub repositories',
        long: ''
      },
      usedTechnologies: ['Gatsby.js, Firebase'],
      imageName: 'github-traffic-viewer',
      urls: {
        github: 'https://github.com/Mokkapps/github-traffic-viewer-website'
      }
    },
    {
      title: 'Void Fest 2018 Band Reminder',
      description: {
        short: 'Web application which can be used to subscribe for push notifications which will inform 30 minutes before a band will play on the music festival Void Fest 2018.',
        long: ''
      },
      usedTechnologies: ['React.js, Node.js'],
      imageName: 'void-fest-band-reminder',
      urls: {
        github: 'https://github.com/Mokkapps/void-fest-pwa'
      }
    }
  ],

  skills: [
    { type: 'JavaScript', level: 90 },
    { type: 'TypeScript', level: 75 },
    { type: 'Java', level: 50 },
    { type: 'CSS', level: 70 },
    { type: 'HTML', level: 80 },
    { type: 'Angular', level: 80 },
    { type: 'React', level: 80 },
    { type: 'Node.js', level: 60 },
  ],
};

module.exports = config;
