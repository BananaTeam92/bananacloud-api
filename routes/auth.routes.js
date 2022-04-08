import { register, login, updateUser, googleRegister } from '../controllers/user.controller'

const routes = (app) => {
    app.route('/api/auth/register')
        .post(register)
    app.route('/api/auth/login')
        .post(login)
    app.route('/api/update-user')
        .post(updateUser)
    app.route('/api/google-register')
        .post(googleRegister)
}

export default routes
