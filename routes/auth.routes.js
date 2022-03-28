import { register, signIn } from '../controllers/user.controller'

const routes = (app) => {
    app.route('/api/auth/register')
        .post(register)
    app.route('/api/auth/signin')
        .post(signIn)
}

export default routes
