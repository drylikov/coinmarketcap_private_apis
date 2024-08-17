import 'dotenv/config'

export default handler => {
  return async (req, res) => {
    try {
      const { authorization } = req.headers
      const bearerToken = authorization ? authorization.substr(7) : ''

      if (bearerToken !== process.env.BEARER_TOKEN) {
        throw new Error('Invalid access token')
      }

      return handler(req, res)
    } catch (err) {
      res.json({ success: false, error: err.message })
    }
  }
}
