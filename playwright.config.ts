import { PlaywrightTestConfig } from '@playwright/test'
import devices from '@playwright/test'

require('dotenv').config()

const httpCredentials = {
    username: process.env.LOGIN_AUTH_USERNAME!,
    password: process.env.LOGIN_AUTH_PASSWORD!,
    };
    
const btoa = (str: string) => Buffer.from(str).toString('base64');
const credentialsBase64 = btoa(`${httpCredentials.username}:${httpCredentials.password}`);
const config: PlaywrightTestConfig = {
    workers:1,
    testDir:'src',
    reporter:[['html', { open: 'always'}]],
    projects:[
        {
            name: 'Microsoft Edge',
            use: { ...devices['Desktop Edge'], channel: 'msedge' },
        }
    ],

    use: {
        headless:true,
        trace:'on',
        baseURL: process.env.URL!,
        extraHTTPHeaders: {
            Accept: 'application/json',
            'Authorization': `Basic ${credentialsBase64}`
        },
        ignoreHTTPSErrors: true
    }
}
export default config
