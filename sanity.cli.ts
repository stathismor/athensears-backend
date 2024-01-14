import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zk524vne',
    dataset: process.env.SANITY_STUDIO_API_DATASET,
  },
})
