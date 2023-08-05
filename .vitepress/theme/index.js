import DefaultTheme from 'vitepress/theme';
import Layout from './components/Layout.vue';
import './styles/style.css';

export default {
  ...DefaultTheme,
  Layout: Layout
};
