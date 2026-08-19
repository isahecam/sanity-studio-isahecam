import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Name of the project.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "internationalizedArrayString",
      description: "Short phrase summarizing the project.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "internationalizedArrayString",
      description: "Detailed description of the project.",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "internationalizedArrayString",
          description: "Alternative text for the cover image in the configured languages.",
        }),
      ],
    }),
    defineField({
      name: "imageGallery",
      title: "Gallery",
      type: "array",
      description: "Additional images showcasing the project.",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "internationalizedArrayString",
              description: "Alternative text for the image in the configured languages.",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "stack",
      title: "Stack / Technologies",
      type: "array",
      description: "Technologies used to build the project.",
      of: [
        {
          type: "reference",
          to: [{ type: "technology" }],
        },
      ],
    }),
    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
      description: "Link to the live/deployed version of the project.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "tagline.0.value",
      media: "coverImage",
    },
  },
});
