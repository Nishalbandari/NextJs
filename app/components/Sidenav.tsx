"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const Sidenav = () => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("Overview");

  const menuItems = [
    { label: "Overview", route: "/" },
    { label: "Post a Job", route: "/post-job" },
    { label: "Search CV", route: "/search-cv" },
    { label: "My Jobs", route: "/my-jobs" },
    { label: "My Searches", route: "/my-searches" },
    { label: "My Candidates", route: "/my-candidates" },
    { label: "Billing & Invoices", route: "/billing-invoices" },
    { label: "Settings", route: "/Settings" },
    { label: "Support", route: "/support" },
  ];

  return (
    <aside className="bg-gray-100 h-full p-4">
      <div className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`px-4 py-2 text-left hover:bg-gray-200 ${
              activeItem === item.label
                ? "text-blue-600 bg-blue-200 border-l-4 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => {
              setActiveItem(item.label);
              router.push(item.route);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidenav;
