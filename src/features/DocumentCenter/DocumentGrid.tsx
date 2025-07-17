import { useDocumentStore } from './useDocumentStore';
import DocumentItem from './DocumentItem';

const DocumentGrid = () => {
  const { documents } = useDocumentStore();

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {documents.map((doc) => (
        <DocumentItem key={doc.url} doc={doc} />
      ))}
    </div>
  );
};

export default DocumentGrid;