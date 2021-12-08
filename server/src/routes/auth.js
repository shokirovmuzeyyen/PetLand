const { Router } = require('express')
const {
  getUsers,
  register,
  login,
  protected,
  logout,
  createPost,
  getPosts,
  getUserPosts,
  getUserInfo,
  updateUser,
 search, post, comment
} = require('../controllers/auth')
const {
  validationMiddleware,
} = require('../middlewares/validations-middleware')
const { registerValidation, loginValidation, updateValidation } = require('../validators/auth')
const { userAuth } = require('../middlewares/auth-middleware')
const router = Router()

router.get('/get-users', getUsers)
router.get('/protected', userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.post('/logout', logout)
router.post('/createPost', createPost)
router.post('/get-posts', getPosts)
router.post('/search', search)
router.post('/post', post)
router.post('/comment', comment)
router.post('/get-user-posts', getUserPosts)
router.post('/get-user-info', getUserInfo)
router.post('/update-user', updateValidation, validationMiddleware, updateUser)

module.exports = router
