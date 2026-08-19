import {
  singletonDocumentListItems,
  filteredDocumentListItems,
} from "sanity-plugin-singleton-management";
import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Contenido")
    .items([
      // Genera automáticamente el item de "bio" (y cualquier otro singleton futuro)
      ...singletonDocumentListItems({ S, context }),
      S.divider(),
      // Resto de documentos (experience, project, etc.) sin los singletons duplicados
      ...filteredDocumentListItems({ S, context }),
    ]);
