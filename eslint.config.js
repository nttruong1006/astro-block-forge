import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import storybook from 'eslint-plugin-storybook'
import reactHooks from 'eslint-plugin-react-hooks'
import eslintPluginAstro from 'eslint-plugin-astro'
import reactRefresh from 'eslint-plugin-react-refresh'

// Config
export default tseslint.config(
  // Files
  {
    files: ['src/**/*.{js,ts,jsx,tsx,astro}']
  },
  // Ignores
  {
    ignores: [
      'dist',
      'node_modules',
      'server/**/*',
      'src/api/endpoints',
      'src/api/models',
      '*.config.ts',
      '*.config.cjs',
      '*.config.js',
      'plopfile.js',
      '.storybook/*'
    ]
  },

  // Settings
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },

  // Language options
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname
      }
    }
  },

  // Plugins
  // JS
  {
    extends: [js.configs.recommended]
  },
  // TS
  {
    extends: [...tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off'
    }
  },
  // Astro
  ...eslintPluginAstro.configs.recommended,
  // React
  {
    plugins: {
      react
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/prop-types': 'off'
    }
  },
  // React hooks
  {
    plugins: {
      'react-hooks': reactHooks
    },
    rules: {
      ...reactHooks.configs.recommended.rules
    }
  },
  // React refresh
  {
    plugins: {
      'react-refresh': reactRefresh
    },
    rules: {
      'react-refresh/only-export-components': ['off', { allowConstantExport: true }]
    }
  },
  // Storybook
  {
    plugins: {
      storybook: storybook.configs.recommended
    }
  }
)
