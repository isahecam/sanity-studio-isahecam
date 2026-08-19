import { defineField, defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role / Job Title",
      type: "internationalizedArrayString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company Details",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Company Name",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "period",
      title: "Employment Period",
      type: "object",
      fields: [
        defineField({
          name: "startDate",
          title: "Start Date",
          type: "date",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "endDate",
          title: "End Date (Leave blank if current)",
          type: "date",
        }),
      ],
    }),
    defineField({
      name: "description",
      title: "Description of Work",
      type: "internationalizedArrayText",
    }),
  ],
  preview: {
    select: {
      title: "company.name",
      subtitle: "role.0.value",
    },
  },
});
