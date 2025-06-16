import { useAuth } from "../context/AuthContext"; // สมมุติว่ามี AuthContext

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div className="text-center mt-12">กำลังโหลด...</div>;

  return isAuthenticated ? <>{children}</> : (
    <div className="text-center mt-12 text-red-400">
      🚫 คุณไม่มีสิทธิ์เข้าหน้านี้
    </div>
  );
};