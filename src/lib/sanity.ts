import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

function getSanityClient() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  if (!projectId || projectId === 'INSERISCI_QUI') {
    return null
  }
  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: true,
  })
}

export const sanityClient = {
  fetch: async (query: string, params?: Record<string, unknown>) => {
    const client = getSanityClient()
    if (!client) return null
    return client.fetch(query, params)
  }
}

export const urlFor = (source: any) => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  if (!projectId || projectId === 'INSERISCI_QUI') return { url: () => '' }
  const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  return imageUrlBuilder(client).image(source)
}

// ── GROQ Queries ──────────────────────────────────────────

export async function getProjects() {
  return await sanityClient.fetch(`
    *[_type == "project"] | order(year desc) {
      "id": id.current, title, client, year, location,
      sector, challenge, solution, results, tags, highlight,
      coverImage, gallery
    }
  `) ?? []
}

export async function getHighlightProjects() {
  return await sanityClient.fetch(`
    *[_type == "project" && highlight == true] | order(year desc) {
      "id": id.current, title, client, year, sector,
      results, tags, coverImage
    }
  `) ?? []
}

export async function getProjectById(id: string) {
  return await sanityClient.fetch(`
    *[_type == "project" && id.current == $id][0] {
      "id": id.current, title, client, year, location,
      sector, challenge, solution, results, tags, highlight,
      coverImage, gallery
    }
  `, { id }) ?? null
}

export async function getServices() {
  return await sanityClient.fetch(`
    *[_type == "service"] | order(order asc) {
      "id": id.current, title, shortDesc, longDesc,
      targetClients, keyFeatures, icon
    }
  `) ?? []
}

export async function getTeam() {
  return await sanityClient.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      name, role, expertise, bio, linkedin, photo
    }
  `) ?? []
}

export async function getPartners() {
  return await sanityClient.fetch(`
    *[_type == "partner"] | order(order asc) {
      name, type, logo, url
    }
  `) ?? []
}
