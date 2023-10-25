module.exports = {
    // ...other Webpack configuration settings...
  
    resolve: {
      // ...other resolve settings...
  
      // Add a fallback for the 'http' module
      fallback: {
        "http": require.resolve("stream-http"),
      },
    },
  };
  