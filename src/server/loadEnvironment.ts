/** @format */

import { config as dotenvConfig } from 'dotenv'

dotenvConfig({
    path: 'config/.env',
})
if (process.env.LOADED) {
    console.log('Loaded environment variables from config/.env!')
} else {
    console.log(
        'Failed to load environment variables!\n' +
            'Try adding `LOADED=true` to the file `config/.env`',
    )
}
