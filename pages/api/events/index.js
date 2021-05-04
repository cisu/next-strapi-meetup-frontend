// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const {events} = require('./data.json');


export default (req, res) => {
  res.status(200).json({ name: 'John Doe' })
}
