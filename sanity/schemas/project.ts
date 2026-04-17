// sanity/schemas/project.ts
import { defineType, defineField } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'Commessa / Progetto',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID slug', type: 'slug', options: { source: 'title' }, validation: r => r.required() }),
    defineField({ name: 'title', title: 'Titolo', type: 'string', validation: r => r.required() }),
    defineField({ name: 'client', title: 'Cliente', type: 'string' }),
    defineField({ name: 'year', title: 'Anno', type: 'number' }),
    defineField({ name: 'location', title: 'Luogo', type: 'string' }),
    defineField({ name: 'sector', title: 'Settore', type: 'string' }),
    defineField({ name: 'challenge', title: 'Sfida', type: 'text' }),
    defineField({ name: 'solution', title: 'Soluzione', type: 'text' }),
    defineField({ name: 'results', title: 'Risultati', type: 'text' }),
    defineField({ name: 'tags', title: 'Tag', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'highlight', title: 'In evidenza', type: 'boolean', initialValue: false }),
    defineField({ name: 'coverImage', title: 'Immagine copertina', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Galleria', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
  ],
  preview: { select: { title: 'title', subtitle: 'client', media: 'coverImage' } },
})
