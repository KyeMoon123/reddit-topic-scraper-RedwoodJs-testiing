var snoowrap = require('snoowrap')
const r = new snoowrap({
  userAgent: 'Reddit Getter Rev1',
  clientId: 'lhCAjKV2lNlVn0msO6isUQ',
  clientSecret: 'sDVFmyCNxZSrZ6_Tod19dvqcv3az6w',
  refreshToken: '2133848369552-lb0VRdBtBCUzFE2Yl9qpXJnPi2ff9g',
})

r.getHot()
  .map((post: { title: any }) => post.title)
  .then(console.log)
