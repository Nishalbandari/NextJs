"use client";
import React, { useState } from "react";
import "../globals.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("editAccount");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const options = [
    { id: 1, label: "Notify me when there are more than 10 job applications" },
    { id: 2, label: "Notify me when candidates have been screened" },
    { id: 3, label: "Notify me when top candidates are found" },
    { id: 4, label: "Notify me 5 days before subscription ends" },
    { id: 5, label: "Subscribe me to newsletters about new features" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "editAccount":
        return (
          <div>
            <h2 className="text-lg font-bold mb-2">Edit Account</h2>
            <p>Here you can edit your account details.</p>
          </div>
        );
      case "myProfile":
        return (
          <div>
            <h1 className="my-3 text-2xl font-semibold">Account Settings</h1>
            <div>
              <h2 className="my-2 text-lg font-medium">Notifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {options.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-500"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>

              <hr className="my-4" />
              <div>
                <h2 className="my-2 text-lg font-medium">Change Password</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["Current", "New", "Confirm"].map((label) => (
                    <div className="flex flex-col" key={label}>
                      <label className="my-2 text-sm font-medium">
                        {label} Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder={`Enter ${label.toLowerCase()} password`}
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-2 text-gray-500"
                          onClick={handleTogglePasswordVisibility}
                        >
                          {showPassword ? "👁️" : "👁️‍🗨️"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end py-4">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                    Save Changes
                  </button>
                </div>
              </div>
              <hr />
              <div>
                <h2 className="my-2">Make My Account Inactive</h2>
                <p>
                  If you deactivate your account, you will stop receiving
                  updatyes on new features and regular communications from
                  Skillety as part of the services. Log in to your account again
                  to reactivate it
                </p>
                <div className=" py-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Deactivate Account
                  </button>
                </div>
              </div>
              <hr />
              <div className="my-2">
                <h2 className="my-2">Delete My Account</h2>
                <p>
                  If you dekete your Skillety account, you will no longer
                  receive Information about the matched jobs, followed employes,
                  job alerts, shotlisted jobs and more You will lose access to
                  all services on Skillety.
                </p>
                <div className=" py-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="border-b">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveTab("editAccount")}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "editAccount"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Edit Account
          </button>
          <button
            onClick={() => setActiveTab("myProfile")}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "myProfile"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            My Profile
          </button>
        </nav>
      </div>
      <div className="bg-white p-6 mt-4 rounded-lg shadow">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings;
