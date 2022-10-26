import express from 'express'
// import multipart from 'connect-multiparty'// @ts-ignore
// const MuiltiPartyMiddleware = multipart({uploadDir:"./images"});
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const router = express.Router()

router.post('/', (req, res) => {
  // console.log(req.files)

  let sampleFile
  let uploadPath

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send(JSON.stringify('No files were uploaded.'))
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.uploadImg
  console.log(req, 'request')
  console.log(req.files, 'files')
  console.log('sampleFile:', sampleFile)
  uploadPath = 'server/uploads/' + sampleFile.name
  // console.log({uploadPath})

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) {
      console.log('error')
      return res.status(500).send(err)
    }

    res.send({
      url: uploadPath,
    })
  })
})

export default router
