import express from 'express'
import { predictText } from '../controllers/inferenceController.js'

const router = express.Router()

router.route('/').post(predictText)

export default router
