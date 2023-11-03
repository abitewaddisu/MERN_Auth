import jwt from 'jsonwebtoken'

export const sign = async (data, key, res) => {
    const token = jwt.sign(data, key)
    res.cookie('token', token, { httpOnly: true, expires: new Date(Date.now() + 30*24*60*60) })
}

export const verify = () => {

}