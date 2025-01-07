module.exports = {
    webpack: {
      devServer: {
        setupMiddlewares: (middlewares, devServer) => {
          // Custom middleware logic can go here, if needed
          return middlewares;
        },
        // Add any additional devServer options here if required
      },
    },
  };
  