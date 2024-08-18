import express from 'express'
import { createCard, getAllCard, getCardByTitle } from '../controllers/card.controller.js'

const cardRouter = express.Router()

cardRouter.post('/cards', createCard)
cardRouter.get('/cards', getAllCard)
cardRouter.get('/cards/:title', getCardByTitle)

export default cardRouter