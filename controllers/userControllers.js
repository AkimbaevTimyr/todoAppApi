const db = require('../db')
const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

const generateJwt = (id, email, password) => {
    return jwt.sign(
        { id, email, password },
        SECRET_KEY,
        { expiresIn: '1h' }
    )
}
class UserController {
    async registration(req, res, next) {
        try {
            const { id, email, password } = req.body
            if (!email || !password || !id) {
                next(ApiError.badRequest('Некорректный email или password'))
            }
            const candidate = await db.query(`select * from person where email = $1`, [email])
            let person = candidate.rows
            if (person === true) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const newUser = await db.query(`INSERT INTO person (id, email, password) values ($1, $2, $3) RETURNING *`, [id, email, password])
            const token = generateJwt(id, email, password)
            return res.json({ token })
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    // сделать вывод не верного пароля и тд
    async login(req, res, next) {
        const { email, password } = req.body
        const user = await db.query(`select * from person where email = $1`, [email]);
        let id = user.rows[0].id;
        if (user.rows[0].password != password) {
            return res.json(["Не верный пароль"])
        }
        const token = generateJwt(user.id, user.email)
        return res.json([token, id])
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.password)
        return res.json(token)
    }
}


module.exports = new UserController()