import {defineField, defineType} from 'sanity'
import {ActivityIcon} from '@sanity/icons'

export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  icon: ActivityIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
