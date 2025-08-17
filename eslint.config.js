// eslint.config.js
import cmyrConfig from 'eslint-config-cmyr/vue'
import { defineConfig } from 'eslint/config'
export default defineConfig([
    cmyrConfig,
    {
        ignores: [
            'node_modules',
            'dist',
            'public',
            '.nuxt/**',
            '.nuxt',
            'coverage',
            '.output',
            'build',
        ],
    },
    {
        rules: {
            'vue/multi-word-component-names': 0,
            'no-undef': 0,
        },
    },
])
