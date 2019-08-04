const base = {
  name: 'Mokkapps (Michael Hoffmann)',
  url: 'https://www.mokkapps.de',
  desc: "I'm Michael Hoffmann. Passionate freelance frontend and app developer.",
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} | ${base.desc}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${base.desc}`,
  siteImage: 'preview.jpg',
  siteLogo: '/favicon.ico',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: `${base.desc}`,

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  authorName: 'Michael Hoffmann',

  skills: [
    // className can be found in https://konpa.github.io/devicon/
    { type: 'JavaScript', className: 'devicon-javascript-plain colored', level: 'advanced' },
    { type: 'C#', className: 'devicon-csharp-line colored', level: 'elementary' },
    { type: '.NET', className: 'devicon-dot-net-plain-wordmark colored', level: 'elementary' },
    { type: 'TypeScript', className: 'devicon-typescript-plain colored', level: 'advanced' },
    { type: 'Java', className: 'devicon-java-plain-wordmark colored', level: 'intermediate' },
    { type: 'CSS3', className: 'devicon-css3-plain-wordmark colored', level: 'advanced' },
    { type: 'HTML5', className: 'devicon-html5-plain-wordmark colored', level: 'advanced' },
    { type: 'Angular', className: 'devicon-angularjs-plain colored', level: 'expert' },
    { type: 'React', className: 'devicon-react-original-wordmark colored', level: 'advanced' },
    { type: 'Vue', className: 'devicon-vuejs-plain-wordmark colored', level: 'advanced' },
    { type: 'Node.js', className: 'devicon-nodejs-plain-wordmark colored', level: 'intermediate' },
  ],
  otherTools: [
    // className can be found in https://konpa.github.io/devicon/
    { type: 'Webpack', className: 'devicon-webpack-plain-wordmark colored' },
    { type: 'Bootstrap', className: 'devicon-bootstrap-plain-wordmark colored' },
    { type: 'jasmine', className: 'devicon-jasmine-plain-wordmark colored' },
    { type: 'Protractor', className: 'devicon-protractor-plain-wordmark colored' },
    { type: 'Sass', className: 'devicon-sass-original colored' },
    { type: 'Docker', className: 'devicon-docker-plain-wordmark colored' },
    { type: 'Git', className: 'devicon-git-plain-wordmark colored' },
    { type: 'IntelliJ', className: 'devicon-intellij-plain-wordmark colored' },
    { type: 'Android', className: 'devicon-android-plain-wordmark colored' },
    { type: 'Apple', className: 'devicon-apple-original colored' },
  ],
  socialLinks: [
    { id: 'github', url: 'https://github.com/mokkapps', icon: 'github' },
    { id: 'twitter', url: 'https://twitter.com/mokkapps', icon: 'twitter' },
    { id: 'dev.to', url: 'https://dev.to/mokkapps', icon: 'dev-dot-to' },
    {
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/michael-hoffmann-3b8933b1',
      icon: 'linkedin',
    },
    {
      id: 'codepen',
      url: ' https://codepen.io/mokkapps-the-scripter',
      icon: 'codepen',
    },
  ],
  characteristics: [
    {
      i18nTitleId: 'characteristicDevTitle',
      i18nDescId: 'characteristicDevDesc',
      icon: 'code',
      link: '/projects',
    },
    {
      i18nTitleId: 'characteristicBlogTitle',
      i18nDescId: 'characteristicBlogDesc',
      icon: 'file-text',
      link: '/blog',
    },
    {
      i18nTitleId: 'characteristicCustomerTitle',
      i18nDescId: 'characteristicCustomerDesc',
      icon: 'zap',
    },
    {
      i18nTitleId: 'characteristicChallengeTitle',
      i18nDescId: 'characteristicChallengeDesc',
      icon: 'search',
    },
  ],

  projects: [
    {
      title: 'Supermarket Challenge',
      description: {
        short:
          'Supermarket Challenge is an iOS & Android smartphone game which delivers an addictive gameplay experience',
        long: `
        Challenge yourself and try to sustain at the supermarket cash register. Set a high score and share it with your friends for a new challenge.

        Alternatively you can try one of the 12 levels to get a better gameplay feeling.
        
        You have to scan articles, enter the correct barcode for fruits and throw bombs away before they explode.
        
        Surprise boxes can include useful extras or have a negative surprise for you. 
        
        Be careful! Unscanned articles in the shopping basket or articles which are thrown out of the screen, cost a life. You have three lifes per round.`,
      },
      usedTechnologies: [
        { name: 'Corona SDK' },
        { iconClassName: 'devicon-apple-original colored' },
        { iconClassName: 'devicon-android-plain' },
      ],
      imageName: 'supermarket-challenge',
      urls: {
        page: '/supermarket-challenge',
        googlePlay:
          'https://play.google.com/store/apps/details?id=de.mokkapps.supermarketchallenge',
        appStore:
          'https://itunes.apple.com/de/app/supermarket-challenge/id1207665675',
      },
      featured: true,
    },
    {
      title: 'Standup Picker',
      description: {
        short:
          'A desktop application which can be used in Scrum teams to initiate the daily Scrum meeting',
        long: '',
      },
      usedTechnologies: [{ name: 'Electron' }, { iconClassName: 'devicon-angularjs-plain' }],
      imageName: 'standup-picker',
      urls: {
        page: '/standup-picker',
        github: 'https://github.com/Mokkapps/scrum-daily-standup-picker',
      },
      featured: true,
    },
    {
      title: 'RebelGamer Mobile App',
      description: {
        short: 'iOS & Android app for the gaming blog www.rebelgamer.de',
        long: '',
      },
      usedTechnologies: [
        { name: 'React-Native' },
        { iconClassName: 'devicon-react-original' },
        { iconClassName: 'devicon-apple-original colored' },
        { iconClassName: 'devicon-android-plain' },
      ],
      imageName: 'rebelgamer',
      urls: {
        page: '/rebelgamer',
        github: 'https://github.com/Mokkapps/rebelgamer-mobile-app',
        googlePlay:
          'https://play.google.com/store/apps/details?id=de.rebelgamer.RebelGamerRSS',
        appStore:
          'https://itunes.apple.com/de/app/rebelgamer-news-fur-gamer/id1187403828',
      },
      featured: true,
    },
    {
      title: 'Parents Soundboard',
      description: {
        short:
          'A soundboard developed for parents to be able to play often needed phrases like "No"',
        long: '',
      },
      usedTechnologies: [
        { name: 'React-Native' },
        { iconClassName: 'devicon-react-original' },
        { iconClassName: 'devicon-apple-original colored' },
        { iconClassName: 'devicon-android-plain' },
      ],
      imageName: 'parents-soundboard',
      urls: {
        page: '/parents-soundboard',
        github: 'https://github.com/Mokkapps/parents-soundboard',
        googlePlay:
          'https://play.google.com/store/apps/details?id=de.mokkapps.parentssoundboard',
        appStore:
          'https://itunes.apple.com/us/app/parents-soundboard/id1434425575',
      },
      featured: true,
    },
    {
      title: 'GitHub Traffic Viewer',
      description: {
        short:
          'A website which shows a list of traffic graphs of your own GitHub repositories',
        long: '',
      },
      usedTechnologies: [{ name: 'Gatsby.js, Firebase' }, { iconClassName: 'devicon-react-original' }],
      imageName: 'github-traffic-viewer',
      urls: {
        page: 'https://github-traffic-viewer.netlify.com/',
        github: 'https://github.com/Mokkapps/github-traffic-viewer-website',
      },
    },
    {
      title: 'Privatimkerei Hoffmann Website',
      description: {
        short: 'Website for our family-run honey farm',
        long: '',
      },
      usedTechnologies: [{ name: 'Gatsby.js' }, { iconClassName: 'devicon-react-original' }],
      imageName: 'privatimkerei-hoffmann',
      urls: {
        page: 'https://privatimkerei-hoffmann.de/',
        github: 'https://github.com/Mokkapps/imkerei-hoffmann-website',
      },
    },
    {
      title: 'Void Fest 2018 Band Reminder',
      description: {
        short:
          'Web application which can be used to subscribe for push notifications which will inform 30 minutes before a band will play on the music festival Void Fest 2018',
        long: '',
      },
      usedTechnologies: [{ iconClassName: 'devicon-react-original' }, { iconClassName: 'devicon-nodejs-plain' }],
      imageName: 'void-fest-band-reminder',
      urls: {
        page: 'https://void-fest-app.netlify.com/',
        github: 'https://github.com/Mokkapps/void-fest-pwa',
      },
    },
  ],

  publications: [
    {
      type: 'talk',
      title:
        '2019 Munich Frontend Meetup: The Engineering Behind My Portfolio Website',
      link: 'https://mokkapps-website-lightning-talk.netlify.com',
    },
    {
      type: 'talk',
      title: '2018 Abendvortrag jambit: Mein erstes Smartphone-Spiel',
      link: 'https://www.mokkapps.de/talks/my-first-smartphone-game/',
    },
    {
      type: 'talk',
      title: '2017 CoffeeTalk jambit: Reactive Programming',
      link:
        'https://www.jambit.com/en/latest-info/events/coffeetalks-june-2017/',
    },
    {
      type: 'talk',
      title:
        '2016 CoffeeTalk jambit: Unity – Eine Einführung in die Cross-Plattform-Spieleentwicklung',
      link:
        'https://jambit.com/aktuelles/veranstaltungen/coffeetalks-april-2016/',
    },
    {
      type: 'article',
      title: '2016 ToiletPaper jambit: Kotlin: Das bessere Java?',
      link:
        'https://www.jambit.com/aktuelles/toilet-papers/kotlin-das-bessere-java/',
    },
    {
      type: 'article',
      title:
        'Concept for an Intermodal Traveller Information System with Real-Time Data Using Complex Event Processing',
      link: 'https://ieeexplore.ieee.org/document/7313462/authors?reload=true',
    },
  ],
};

module.exports = config;
