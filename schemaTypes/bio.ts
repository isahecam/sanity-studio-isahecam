import { defineField, defineType } from "sanity";

export const bioType = defineType({
  name: "bio",
  title: "Biography",
  type: "document",
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      description: "A short description of your profile or tagline",
      type: "internationalizedArrayString",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "A brief biography or introduction about yourself",
      type: "internationalizedArrayBlockContent",
    }),
  ],
  preview: {
    select: {
      title: "headline.0.value",
      subtitle: "summary.0.children.0.text",
    },
  },
});
