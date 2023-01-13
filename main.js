import './assets/styles/preloader.css';
import './assets/styles/404.css';
import './assets/styles/common.css';
import './assets/styles/all.css';

import './assets/script/preloader.js';

import Main from './assets/script/index.js';

let main = new Main();

main.render()
  .then(() => console.log('Страница готова!'));