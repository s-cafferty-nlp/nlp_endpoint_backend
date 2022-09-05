import axios from 'axios'

export const predictText = async (req, res) => {
  try {
    const { text } = req.body

    console.log(text)

    // if (!image) return res.status(400).send("No image");
    // let cleansedImage=image.replace(/^data:image\/\w+;base64,/, "")

    // let b64string = cleansedImage
    // //Buffer objects are used to represent a fixed-length sequence of bytes
    // let buffer = Buffer.from(b64string, 'base64');

    const requestToAWS = axios({
      method: 'post',
      url: `https://hgtguzc0ff.execute-api.us-east-1.amazonaws.com/production/unsummarize`,
      headers: {
        'Content-type': 'application/json',
      },
      data: text,
    })
      .then((resp) => {
        return resp.data
      })
      .catch((err) => {
        console.log('Error', err)
      })

    const respFromAWS = await requestToAWS
    return res.json({ message: respFromAWS })
  } catch (err) {
    console.log(err)
  }
}
