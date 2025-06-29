import React, { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, sidebar }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* เนื้อหาหลัก */}
          <section className="flex-grow">{children}</section>

          {/* เนื้อหาข้าง (Sidebar หรือ อื่นๆ) */}
          {sidebar && (
            <aside
              className="
                mt-6 md:mt-0 md:w-80 flex-shrink-0
                bg-gray-50 dark:bg-gray-800
                rounded-md
                p-4
                max-h-[70vh] md:max-h-[80vh]
                overflow-y-auto
                border border-gray-200 dark:border-gray-700
              "
            >
              {sidebar}
            </aside>
          )}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;