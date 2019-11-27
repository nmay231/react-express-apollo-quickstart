/** @format */

import { config as dotenvConfig } from 'dotenv'

// Environment variables loaded externally
if (process.env.LOADED) {
    console.log('Environment variables loaded')
} else {
    dotenvConfig({
        path: 'config/.env',
    })
    // Loaded from file successfully
    if (process.env.LOADED) {
        console.log('Loaded environment variables from config/.env')
    } else {
        // Not so successful
        console.log(
            'Failed to load environment variables!\n' +
                'Try adding `LOADED=true` to the file `config/.env`',
        )
    }
}
