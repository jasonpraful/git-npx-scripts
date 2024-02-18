"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
/**
 * Function to Clone Vite boilerplate repository and install dependencies
 * @param {string} repoName
 * @returns {void}
 */
const handler = (repoName = 'vite-boilerplate') => {
    const GIT_URL = 'https://github.com/jasonpraful/vite-boilerplate';
    if (fs_1.default.existsSync(repoName)) {
        console.error('A directory with the same name already exists. Please remove it or choose a different name');
        return;
    }
    try {
        console.time('Cloning and installing dependencies completed in');
        console.info('Cloning repository...');
        (0, child_process_1.execSync)(`git clone --depth 1 ${GIT_URL} ${repoName}`, { stdio: 'inherit' });
        console.info('Installing dependencies...');
        (0, child_process_1.execSync)(`cd ${repoName} && npm install`, { stdio: 'inherit' });
        console.timeEnd('Cloning and installing dependencies completed in');
        console.info('Congratulations! Your Vite boilerplate is ready 🚀');
    }
    catch (error) {
        console.error(error);
    }
};
exports.handler = handler;
exports.default = exports.handler;
