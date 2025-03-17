export default {
    meta: {
      type: "problem",
      docs: {
        description: "Disallow the use of moment.js",
        category: "Best Practices",
        recommended: true
      },
      messages: {
        noMoment: "Do not use moment.js. Consider using alternatives like date-fns or Luxon."
      }
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === "moment") {
            context.report({
              node,
              messageId: "noMoment"
            });
          }
        },
        CallExpression(node) {
          if (node.callee.name === "require" && node.arguments[0]?.value === "moment") {
            context.report({
              node,
              messageId: "noMoment"
            });
          }
        }
      };
    }
};  