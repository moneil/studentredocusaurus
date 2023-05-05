/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  APISidebar: [
    'studentapisintro',
    // {
    //   type: 'category',
    //   label: 'Student APIs',
    //   items: [
    //     {
    //       type: 'link',
    //       label: 'Academics',
    //       href: '../openapi/student/academics',
    //     },
    //     {
    //       type: 'link',
    //       label: 'Admissions',
    //       href: '../openapi/student/admissions',
    //     },
    //     {
    //       type: 'link',
    //       label: 'Career Services',
    //       href: '../openapi/student/careerservices',
    //     },
    //     {
    //       type: 'link',
    //       label: 'Common',
    //       href: '../openapi/student/common',
    //     },
    //     {
    //       type: 'link',
    //       label: 'CRM',
    //       href: '../openapi/student/crm',
    //     },
    //     {
    //       type: 'link',
    //       label: 'Financial Aid',
    //       href: '../openapi/student/financialaid',
    //     },
    //     {
    //       type: 'link',
    //       label: 'Student Accounts',
    //       href: '../openapi/student/studentaccounts',
    //     },
    //     {
    //       type: 'link',
    //       label: 'Student Services',
    //       href: '../openapi/student/studentservices',
    //     },
    //   ],
    // },
    {
      type: 'category',
      label: 'Student APIs',
      items: [
        {
          type: 'autogenerated',
          dirName: 'apis/student', // Generate sidebar slice from docs path
        },
      ]
    }
  ]
};

module.exports = sidebars;