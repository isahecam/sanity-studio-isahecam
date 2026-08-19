import { defineField, defineType } from "sanity";

export const technologyType = defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Technology Name",
      description: "The name of the technology",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "key",
      title: "Key (Technology Identifier)",
      description: "The key representing the technology",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "key.current" },
  },
});
