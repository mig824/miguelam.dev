const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  const link1 = React.createElement(`link`, {
    key: `gstatic-fonts`,
    rel: `preconnect`,
    href: `https://fonts.gstatic.com`,
  })
  const link2 = React.createElement(`link`, {
    key: `yeseva-one`,
    rel: `stylesheet`,
    href: `https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap`,
  })
  const link3 = React.createElement(`link`, {
    key: `josefin-sans`,
    rel: `stylesheet`,
    href: `https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap`,
  })

  setHeadComponents([link1, link2, link3])
}
