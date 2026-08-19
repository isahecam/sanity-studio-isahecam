import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { singletonTools } from "sanity-plugin-singleton-management";
import { structure } from "./structure";

export default defineConfig({
  name: "default",
  title: "isahecam.com",

  projectId: "owptitl8",
  dataset: "production",

  mediaLibrary: {
    enabled: true,
  },

  plugins: [
    structureTool({ structure }),
    singletonTools(),
    visionTool(),
    internationalizedArray({
      languages: [
        { id: "en", title: "English" },
        { id: "es", title: "Español" },
      ],
      defaultLanguages: ["es"],
      fieldTypes: ["string", "blockContent", "text"],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
