import React from 'react'
import { withRouter } from 'react-router'

export default withRouter(({router}) => {
  const search = window.location.search
  const url = search.match(/url=([^&]+)/)[1]
  window.setTimeout(() => router.push(url || '/'), 1000)
  return (<p>正在跳转中...  {url}</p>)
})
