module.exports = eleventyConfig => {
  eleventyConfig.addCollection('nav', collection => {
    return collection
      .getAll()
      .filter(item => {
        return item.data.menuOrder;
      })
      .sort((a, b) => {
        return a.data.menuOrder > b.data.menuOrder ? 1 : -1;
      })
  })
  // Netlify Redirect
  eleventyConfig.addPassthroughCopy('_redirects')

  // Web Fonts
  eleventyConfig.addPassthroughCopy('src/assets/')
  eleventyConfig.addPassthroughCopy('src/images/')

  // Favicon
  eleventyConfig.addPassthroughCopy('src/favicon.ico')
  eleventyConfig.addPassthroughCopy('src/favicon.png')

  // Watch CSS
  eleventyConfig.addWatchTarget('src/assets/**/*.css')

  return {
    dir: {
      input: 'src'
    },
    templateFormats: ['liquid', 'html'],
    passthroughFileCopy: true
  }
}
