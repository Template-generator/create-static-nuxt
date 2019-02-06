const contentful = require('contentful')

export default ({ app }, inject) => {
  inject(
    'contentful',
    contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: 'r5qfjn2gyt3z',
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken:
        '14f332236469b52d6bf21ca76b01813fdd33fb53cc8c3c9719992a4fdec1fa3a'
    })
  )
}
