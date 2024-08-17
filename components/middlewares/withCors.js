import Cors from 'cors'

const initMiddleware = middleware => {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

const cors = initMiddleware(
  Cors({
    methods: ['POST']
  })
)

export default handler => {
  return async (req, res) => {
    await cors(req, res)
    return handler(req, res)
  }
}
