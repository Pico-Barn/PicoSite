// sanity/schemas/service.ts
import { defineType, defineField } from 'sanity'

export const serviceSchema = defineType({
  name: 'service',
  title: 'Servizio',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'title', title: 'Titolo', type: 'string', validation: r => r.required() }),
    defineField({ name: 'shortDesc', title: 'Descrizione breve', type: 'text', rows: 3 }),
    defineField({ name: 'longDesc', title: 'Descrizione estesa', type: 'text', rows: 6 }),
    defineField({ name: 'targetClients', title: 'Target clienti', type: 'string' }),
    defineField({ name: 'keyFeatures', title: 'Funzionalità chiave', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'icon', title: 'Icona (nome)', type: 'string' }),
    defineField({ name: 'order', title: 'Ordine', type: 'number' }),
  ],
  preview: { select: { title: 'title', subtitle: 'shortDesc' } },
})

// sanity/schemas/teamMember.ts
export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Membro del Team',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome e cognome', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', title: 'Ruolo', type: 'string' }),
    defineField({ name: 'expertise', title: 'Specializzazione', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 4 }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Ordine', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'photo' } },
})

// sanity/schemas/partner.ts
export const partnerSchema = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome', type: 'string', validation: r => r.required() }),
    defineField({ name: 'type', title: 'Tipo', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'url', title: 'Sito web', type: 'url' }),
    defineField({ name: 'order', title: 'Ordine', type: 'number' }),
  ],
  preview: { select: { title: 'name', subtitle: 'type', media: 'logo' } },
})
