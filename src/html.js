import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// 'Root' is the default component html.js that Gatsby uses
const Root = ({
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </>
)

export default function Html({ htmlAttributes, ...props }) {
  const renderedChildren = renderToStaticMarkup(<Root {...props} />)

  return (
    <html
      {...htmlAttributes}
      dangerouslySetInnerHTML={{
        __html: `
<!---------------------------------------------

Looks like someone got a little curious hehe
It's alright I do it all the time :)

If you'd like to see what tools I used
there's a link to the source code in the footer

Go take a look!

----------------------------------------------->
				${renderedChildren}
			`,
      }}
    />
  )
}
