#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const vite_boilerplate_1 = __importDefault(require("./modules/vite-boilerplate"));
const LIST = ['vite-boilerplate'];
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield inquirer_1.default.prompt([
            {
                name: 'option',
                message: 'Select one of the following options',
                type: 'list',
                choices: LIST
            }
        ]);
        switch (response.option) {
            case 'vite-boilerplate':
                const responses = yield inquirer_1.default.prompt([
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
                                return 'Only lowercase alphabets and hyphens are allowed';
                            }
                            return true;
                        },
                        when: (answers) => answers.changeName
                    }
                ]);
                (0, vite_boilerplate_1.default)(responses.repoName);
                break;
            default:
                console.log('Invalid option');
        }
    });
})();
