import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "blockContent",
  title: "Contenido enriquecido",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Allowed block styles (H1-H4, quote, etc.)
      // For a short bio, you usually only need "normal"
      styles: [{ title: "Normal", value: "normal" }],
      // Allowed lists — remove this if it does not apply
      lists: [],
      marks: {
        // Decorators (bold, italic, etc.)
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        // Annotations (links and other inline objects with properties)
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) => Rule.uri({ scheme: ["http", "https", "mailto"] }),
              },
            ],
          },
        ],
      },
    }),
    // Optional: if you ever want inline images inside the bio
    // defineArrayMember({ type: 'image' }),
  ],
});
