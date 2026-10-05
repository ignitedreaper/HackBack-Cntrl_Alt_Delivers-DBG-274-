import express from 'express'
import {createInvoice, updateInvoice, deleteInvoice, getInvoice, getInvoicesByUser, getTotalCount } from '../controllers/invoices.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/count', auth, getTotalCount) //use to generate invoice serial number
router.get('/:id', getInvoice)
router.get('/', auth, getInvoicesByUser)
router.post('/', auth, createInvoice)
router.patch('/:id', auth, updateInvoice)
router.delete('/:id', auth, deleteInvoice)


export default router