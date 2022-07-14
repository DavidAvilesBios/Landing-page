module.exports = {
  siteMetadata: {
    title: `Impulsa Landing Page`,
    titleTemplate: `Impulsa`,
    description: `Gatsby/Material-UI Template via SnappyWebDesign.net`,
    author: `Hugo Encinas`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-resolve-src", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      path: `${__dirname}/src/assets/images`,
    },
  },
  {
    resolve: "gatsby-omni-font-loader",
    options: {

      /* Font loading mode */
      mode: "async",
  
      /* Enable font loading listener to handle FOUT */
      enableListener: true,
  
      /* Preconnect URL-s. This example is for Google Fonts */
      preconnect: ["https://fonts.googleapis.com"],
  
      // /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
      custom: [
        {
          /* Exact name of the font as defied in @font-face CSS rule */
          name: ["Montserrat"],
          /* Path to the font CSS file inside the "static" folder with @font-face definition */
          file: "fonts/fonts.css",
        },
      ],
    },
  }
]
};