import { execSync } from 'child_process'
import fs from 'fs'

/**
 * Function to Clone Vite boilerplate repository and install dependencies
 * @param repoName - Name of the repository
 * @returns void
 */
export const handler = (repoName: string = 'vite-boilerplate'): void => {
  const GIT_URL = 'https://github.com/jasonpraful/vite-boilerplate'

  if (fs.existsSync(repoName)) {
    console.error(
      'A directory with the same name already exists. Please remove it or choose a different name'
    )
    return
  }

  try {
    console.time('Cloning and installing dependencies completed in')
    console.info('Cloning repository...')
    execSync(`git clone --depth 1 ${GIT_URL} ${repoName}`, { stdio: 'inherit' })
    fs.rmdirSync(`${repoName}/.git`, { recursive: true })

    console.info('Installing dependencies...')

    execSync(`cd ${repoName} && npm install`, { stdio: 'inherit' })

    console.timeEnd('Cloning and installing dependencies completed in')
    console.info('Congratulations! Your Vite boilerplate is ready 🚀')
  } catch (error) {
    console.error(error)
  }
}

export default handler
