// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '落格输入法使用手册',
  tagline: '落格工作室',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.logcg.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'R0uter', // Usually your GitHub org/user name.
  projectName: 'loginput-faq', // Usually your repo name.

  onBrokenLinks: 'throw',
  
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/R0uter/loginput-faq/tree/master',
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.png',
      navbar: {
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '落格输入法使用手册',
          },
          {
            href: 'https://im.logcg.com',
            position: 'right',
            label: '落格工作室',
          },
          {
            href: 'https://github.com/R0uter/loginput-faq/tree/master',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '群组',
            items: [
              {
                label: 'Telegram 群组',
                to: 'https://t.me/joinchat/DGZalT6pMAHNNg8JyfPLXw',
              },
            ],
          },
          {
            title: '新闻',
            items: [
              {
                label: 'Telegram 频道',
                href: 'https://t.me/logstudio',
              },
              {
                label: '微博',
                href: 'https://weibo.com/u/6332141409',
              },
              {
                label: 'X',
                href: 'http://twitter.com/imlogcg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '落格工作室',
                to: 'https://im.logcg.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/R0uter/loginput-faq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 落格工作室. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
