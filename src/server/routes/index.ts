/** @format */

import { Router, json } from 'express'

const router = Router()

router.use(json())
router.use('/api/hello', (req, res) => res.status(200).json('world'))
router.use('/api/echo', (req, res) => res.status(200).json({ body: req.body }))

// You might need to keep traditional REST endpoints to allow for auth
router.post('/api/login', (req, res) => res.status(200).send('Logged in'))

export default router
