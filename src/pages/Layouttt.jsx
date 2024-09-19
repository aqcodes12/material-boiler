import React from "react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-blue-500 text-white p-4">Navbar</header>

      <div className="flex flex-1">
        {/* Search Filter */}
        <aside className="w-64 bg-gray-100 p-4 overflow-y-auto sticky top-0 h-full">
          <div className="h-[calc(100vh-64px-64px)]">
            {/* Make space for the footer and navbar */}
            {/* Replace 64px with the actual height of the navbar and footer if needed */}
            <div className="flex flex-col gap-4">
              {/* Add your search filter items here */}
              <div className="bg-white p-4 shadow-md rounded-lg">Filter 1</div>
              <div className="bg-white p-4 shadow-md rounded-lg">Filter 2</div>
              <div className="bg-white p-4 shadow-md rounded-lg">Filter 3</div>
              <div className="bg-white p-4 shadow-md rounded-lg">Filter 4</div>
              {/* Add more filter items as needed */}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-50">
          <div className="grid gap-4">
            {/* Add your main content here */}
            <div className="bg-white p-4 shadow-md rounded-lg">Content 1</div>
            <div className="bg-white p-4 shadow-md rounded-lg">Content 2</div>
            <div className="bg-white p-4 shadow-md rounded-lg">Content 3</div>
            {/* Add more content items as needed */}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4">Footer</footer>
    </div>
  );
};

export default Layout;
