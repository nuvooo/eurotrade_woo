import { defineConfig } from 'cypress'

export default defineConfig({
  videoCompression: 15,
  projectId: 'kvgcsa',
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
  e2e: {},
})
