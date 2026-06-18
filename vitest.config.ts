import { resolve } from 'path'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'node',
        // nuxt 4.4.x + vitest 已知 bug: MagicString is not a constructor
        // @see https://github.com/nuxt/nuxt/issues/34645
        // @see https://github.com/nuxt/test-utils/issues/1690
        exclude: ['tests/server/api/test.test.ts'],
        passWithNoTests: true,
    },
    resolve: {
        alias: {
            'bun:test': resolve(__dirname, './tests/mocks/bun-test.ts'),
        },
    },
})
