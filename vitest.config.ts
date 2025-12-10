import { resolve } from 'path'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
    },
    resolve: {
        alias: {
            'bun:test': resolve(__dirname, './tests/mocks/bun-test.ts'),
        },
    },
})
