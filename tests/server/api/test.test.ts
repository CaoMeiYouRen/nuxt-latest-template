import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

await setup({
    server: true,
})

describe('API test', () => {
    it('GET /api/test', async () => {
        const res = await $fetch('/api/test')
        expect(res).toEqual({ message: 'Hello World!' })
    })
})
