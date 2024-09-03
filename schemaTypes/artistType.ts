import {defineField, defineType} from 'sanity'
import {BoltIcon} from '@sanity/icons'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: BoltIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
