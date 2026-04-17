import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => builder.image(source)

// ── GROQ Queries ──────────────────────────────────────────

export async function getProjects() {
  return sanityClient.fetch(`
    *[_type == "project"] | order(year desc) {
      "id": id.current, title, client, year, location,
      sector, challenge, solution, results, tags, highlight,
      coverImage, gallery
    }
  `)
}

export async function getHighlightProjects() {
  return sanityClient.fetch(`
    *[_type == "project" && highlight == true] | order(year desc) {
      "id": id.current, title, client, year, sector,
      results, tags, coverImage
    }
  `)
}

export async function getProjectById(id: string) {
  return sanityClient.fetch(`
    *[_type == "project" && id.current == $id][0] {
      "id": id.current, title, client, year, location,
      sector, challenge, solution, results, tags, highlight,
      coverImage, gallery
    }
  `, { id })
}

export async function getServices() {
  return sanityClient.fetch(`
    *[_type == "service"] | order(order asc) {
      "id": id.current, title, shortDesc, longDesc,
      targetClients, keyFeatures, icon
    }
  `)
}

export async function getTeam() {
  return sanityClient.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      name, role, expertise, bio, linkedin, photo
    }
  `)
}

export async function getPartners() {
  return sanityClient.fetch(`
    *[_type == "partner"] | order(order asc) {
      name, type, logo, url
    }
  `)
}
