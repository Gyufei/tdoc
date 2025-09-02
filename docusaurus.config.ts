import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Tadle Docs',
  tagline: 'The Parallel Sandbox opening a new dimension of accessing dApps.',
  favicon: 'https://cdn.tadle.com/icons/favicon-black.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.tadle.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false, // 默认展开分类
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://cdn.tadle.com/images/thumbnail-1800_945.jpg',
    metadata: [
      { name: 'description', content: 'Tadle - The Parallel Sandbox opening a new dimension of accessing dApps.' },

      // Open Graph
      { property: 'og:title', content: 'Tadle Docs' },
      { property: 'og:description', content: 'Tadle - The Parallel Sandbox opening a new dimension of accessing dApps.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://cdn.tadle.com/images/thumbnail-1800_945.jpg' },
      { property: 'og:url', content: 'https://docs.tadle.com' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Tadle Docs' },
      { name: 'twitter:description', content: 'Tadle - The Parallel Sandbox opening a new dimension of accessing dApps.' },
      { name: 'twitter:image', content: 'https://cdn.tadle.com/images/thumbnail-1800_945.jpg' },
      { name: 'twitter:site', content: '@tadle_com' },
    ],
    navbar: {
      title: '',
      logo: {
        alt: 'Tadle Logo',
        src: 'https://cdn.tadle.com/images/logo-black.svg',
        srcDark: 'https://cdn.tadle.com/images/logo-white.svg',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
