import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { projectSchema } from './sanity/schemas/project'
import { serviceSchema, teamMemberSchema, partnerSchema } from './sanity/schemas/content-types'

export default defineConfig({
  name: 'pico-studio',
  title: 'Pico CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [projectSchema, serviceSchema, teamMemberSchema, partnerSchema],
  },
})
