module.exports = {
  rules: {
    "no-moment": {
      meta: {
        type: "problem",
        docs: {
          description: "Disallow moment.js",
          category: "Best Practices",
          recommended: true
        },
        schema: [] // No options
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === "moment") {
              context.report({
                node,
                message: "Do not use moment.js. Use date-fns instead."
              });
            }
          }
        };
      }
    }
  }
};
