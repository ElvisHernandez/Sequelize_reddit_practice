const { Router } = require('express')
const router = Router()
const axios = require('axios')

// ************************************************************************* //
// Look up a subreddit
// ************************************************************************* //

router.get('/api/sub', async (req, res, next) => {
  const subReddit = req.query.subReddit

  const url = `https://www.reddit.com/r/${subReddit}.json`

  try {
    const { data } = await axios.get(url)
		const redditArray = []

    const response = data.data.children
		
    response.map(reddit => {
      redditArray.push({
        title: reddit.data.title,
        thumbnail: reddit.data.thumbnail,
        upvotes: reddit.data.ups,
        image: reddit.data.url,
        author: reddit.data.author
      })
    })

    res.json({ success: true, redditArray })
  } catch (e) {
    res.json({ success: false, error: e.toString() })
  }

})

module.exports = router