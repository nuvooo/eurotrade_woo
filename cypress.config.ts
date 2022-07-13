import { defineConfig } from 'cypress'

export default defineConfig({
  videoCompression: 15,
  projectId: 'kvgcsa',

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
