// ✅ src/hooks/useDocumentStore.ts – Global state สำหรับ PDF documents (in-memory)

import { useState } from 'react';
import { PDFDoc } from './types';

let sharedState: PDFDoc[] = [];

export const useDocumentStore = () => {
  const [documents, setDocuments] = useState<PDFDoc[]>(sharedState);

  const addDocument = (doc: PDFDoc) => {
    sharedState = [...sharedState, doc];
    setDocuments([...sharedState]);
  };

  const resetDocuments = () => {
    sharedState = [];
    setDocuments([]);
  };

  const removeDocument = (id: string) => {
    sharedState = sharedState.filter((d) => d.id !== id);
    setDocuments([...sharedState]);
  };

  return {
    documents,
    addDocument,
    removeDocument,
    resetDocuments,
  };
};