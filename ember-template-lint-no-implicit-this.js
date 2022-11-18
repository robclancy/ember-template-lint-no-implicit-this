import NoImplicitThisFix from "./lib/rules/no-implicit-this-fix.js";

export default {
  name: "ember-template-lint-no-implicit-this-plugin",

  rules: {
    "no-implicit-this-fix": NoImplicitThisFix,
  },

  configurations: {
    recommended: {
      rules: {
        "no-implicit-this-fix": true,
      },
    },
  },
};
