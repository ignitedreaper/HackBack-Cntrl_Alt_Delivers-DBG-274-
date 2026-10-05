import express from 'express'
import { getProfiles, createProfile, updateProfile, deleteProfile, getProfile, getProfilesByUser } from '../controllers/profile.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/:id', getProfile)
router.get('/', auth, getProfilesByUser)
router.post('/', auth, createProfile)
router.patch('/:id', auth, updateProfile)
router.delete('/:id', auth, deleteProfile)


export default router