import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

function RepoList() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("/api/repos/myub217")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching repos:", err);
        setError("โหลดข้อมูลไม่สำเร็จ");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">🔄 กำลังโหลดข้อมูล...</div>;
  if (error) return <div className="p-4 text-red-600">❌ {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📦 GitHub Repositories</h2>
      <ul className="list-disc pl-6 space-y-1">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a
              className="text-blue-600 underline"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`ลิงก์ไปยัง repository ${repo.name}`}
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;