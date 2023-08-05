import DefaultTheme from 'vitepress/theme';
import NotFound from './components/NotFound.vue';

import './css/style.css';

export default {
  ...DefaultTheme,
  Layout: NotFound
};
