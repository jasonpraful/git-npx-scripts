#!/usr/bin/env node

import inquirer from 'inquirer'
import viteHandler from './modules/vite-boilerplate'

const LIST = ['vite-boilerplate']

;(async function () {
  const response = await inquirer.prompt([
    {
      name: 'option',
      message: 'Select one of the following options',
      type: 'list',
      choices: LIST
    }
  ])

  switch (response.option) {
    case 'vite-boilerplate':
      const responses = await inquirer.prompt([
        {
          name: 'changeName',
          message: 'Would you like to change the name of the repository?',
          type: 'confirm',
          default: false
        },
        {
          name: 'repoName',
          message: 'Enter the name of the repository',
          type: 'input',
          default: 'vite-boilerplate',
          validate: (input) => {
            if (input.match(/[^a-z-]/)) {
              return 'Only lowercase alphabets and hyphens are allowed'
            }
            return true
          },
          when: (answers) => answers.changeName
        }
      ])
      viteHandler(responses.repoName)
      break
    default:
      console.log('Invalid option')
  }
})()
