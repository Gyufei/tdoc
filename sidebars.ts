import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      items: [
        'overview/introduction',
        'overview/what-s-dsa',
        'overview/what-s-parallel-sandbox'
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: false,
      items: [
        'getting-started/quickstart',        
        'getting-started/get-mon',
        'getting-started/create-dsa-account',
        'getting-started/create-coin'
      ]
    },
    {
      type: 'category',
      label: 'Core Modules',
      collapsible: false,
      items: [
        'core-modules/mon-usd',
        {
          type: 'category',
          label: 'Odds market',
          collapsible: true,
          collapsed: false,
          items: [
            'core-modules/odds-market/create-an-odd-market',
            'core-modules/odds-market/purchase-odd-tokens'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Development',
      collapsible: false,
      items: [
        'development/installation',
        'development/building-the-application',
        'development/running-the-application'
      ]
    },
    {
      type: 'category',
      label: 'Collaboration',
      collapsible: false,
      items: [
        'collaboration/ambassador-program',
        'collaboration/submit-integration-request'
      ]
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsible: false,
      items: [
        'faq/overview',
        'faq/what-s-tadle',
        'faq/how-does-parallel-execution-boost-the-transactions',
        'faq/what-s-bft-consensus'
      ]
    }
  ]
};

export default sidebars;
