import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    // Componentes vindos do registry do shadcn/magicui: exportam variantes cva e usam efeitos próprios.
    files: ["src/components/ui/**", "src/components/magicui/**"],
    rules: {
      "react-refresh/only-export-components": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
)
