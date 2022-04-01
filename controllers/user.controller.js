import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { User } from '../models/user.model'

export const register = (req, res) => {
    let newUser = User(req.body)
    if (!newUser.password || !newUser.email) {
        return res.status(400).send({ message: 'Missing email or password' })
    }
    newUser.password = bcrypt.hashSync(req.body.password, 10)

    newUser.save((err, user) => {
        if (err) return res.status(400).send({ message: 'Email déjà enregistrer' })
        else {
            user.password = newUser.password
            return res.json({ 
                token: jwt.sign({ user }, process.env.SECRET_KEY), 
            })
        }
    })
}

export const login = (req, res) => {
    console.log(req);
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res
                .status(401)
                .json({ message: 'Authentication failed. Invalid user or password.' })
        }
        return res.json({
            token: jwt.sign({ user }, process.env.SECRET_KEY),
        })
    })
}

export const loginRequired = (req, res, next) => {
    if (req.user) next()
    else return res.status(401).json({ message: 'Unauthorized user !' })
}
