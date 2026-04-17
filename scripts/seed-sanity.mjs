#!/usr/bin/env node
/**
 * scripts/seed-sanity.mjs
 * Importa il dataset simulato Pico in Sanity CMS.
 * Eseguire con: node scripts/seed-sanity.mjs
 * Richiede: NEXT_PUBLIC_SANITY_PROJECT_ID e SANITY_API_TOKEN in .env.local
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __dirname = dirname(fileURLToPath(import.meta.url))

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Carica il dataset
const datasetPath = resolve(__dirname, '../pico_dataset.json')
const data = JSON.parse(readFileSync(datasetPath, 'utf-8'))

async function deleteExisting(type) {
  const ids = await client.fetch(`*[_type == $type]._id`, { type })
  if (ids.length === 0) return
  const tx = client.transaction()
  ids.forEach(id => tx.delete(id))
  await tx.commit()
  console.log(`  Eliminati ${ids.length} documenti esistenti di tipo "${type}"`)
}

async function seedServices() {
  console.log('\n📦 Importazione servizi...')
  await deleteExisting('service')
  const tx = client.transaction()
  data.services.forEach((s, i) => {
    tx.create({
      _type: 'service',
      _id: `service-${s.id}`,
      id: { _type: 'slug', current: s.id },
      title: s.title,
      shortDesc: s.shortDesc,
      longDesc: s.longDesc,
      targetClients: s.targetClients,
      keyFeatures: s.keyFeatures,
      icon: s.icon,
      order: i + 1,
    })
  })
  await tx.commit()
  console.log(`  ✓ ${data.services.length} servizi importati`)
}

async function seedProjects() {
  console.log('\n📁 Importazione commesse...')
  await deleteExisting('project')
  const tx = client.transaction()
  data.projects.forEach((p, i) => {
    tx.create({
      _type: 'project',
      _id: `project-${p.id}`,
      id: { _type: 'slug', current: p.id },
      title: p.title,
      client: p.client,
      year: p.year,
      location: p.location,
      sector: p.sector,
      challenge: p.challenge,
      solution: p.solution,
      results: p.results,
      tags: p.tags,
      highlight: p.highlight,
    })
  })
  await tx.commit()
  console.log(`  ✓ ${data.projects.length} commesse importate`)
}

async function seedTeam() {
  console.log('\n👥 Importazione team...')
  await deleteExisting('teamMember')
  const tx = client.transaction()
  data.team.forEach((m, i) => {
    tx.create({
      _type: 'teamMember',
      _id: `team-${m.id}`,
      name: m.name,
      role: m.role,
      expertise: m.expertise,
      bio: m.bio,
      linkedin: m.linkedin !== '#' ? m.linkedin : undefined,
      order: i + 1,
    })
  })
  await tx.commit()
  console.log(`  ✓ ${data.team.length} membri del team importati`)
}

async function seedPartners() {
  console.log('\n🤝 Importazione partner...')
  await deleteExisting('partner')
  const tx = client.transaction()
  data.partners.forEach((p, i) => {
    tx.create({
      _type: 'partner',
      _id: `partner-${i}`,
      name: p.name,
      type: p.type,
      order: i + 1,
    })
  })
  await tx.commit()
  console.log(`  ✓ ${data.partners.length} partner importati`)
}

async function main() {
  console.log('🚀 Pico – Seed Sanity CMS')
  console.log(`   Progetto: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
  console.log(`   Dataset:  ${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}`)

  try {
    await seedServices()
    await seedProjects()
    await seedTeam()
    await seedPartners()
    console.log('\n✅ Seed completato. Tutti i contenuti sono in Sanity.')
    console.log('   Apri https://pico.sanity.studio per verificare.')
  } catch (err) {
    console.error('\n❌ Errore durante il seed:', err.message)
    console.error('   Verifica SANITY_API_TOKEN e NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
    process.exit(1)
  }
}

main()
