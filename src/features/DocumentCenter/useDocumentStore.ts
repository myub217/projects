import { useState } from 'react';
import { PDFDoc } from './types';

let sharedState: PDFDoc[] = [];

export const useDocumentStore = () => {
  const [documents, setDocuments] = useState<PDFDoc[]>(sharedState);

  const addDocument = (doc: PDFDoc) => {
    sharedState = [...sharedState, doc];
    setDocuments([...sharedState]);
  };

  return { documents, addDocument };
};