import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("editAccount");
  //   const [selectedOptions, setSelectedOptions] = useState([]);
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

  //   const handleCheckboxChange = (id) => {
  //     setSelectedOptions((prev) =>
  //       prev.includes(id)
  //         ? prev.filter((optionId) => optionId !== id)
  //         : [...prev, id]
  //     );
  // };

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
                      //   checked={selectedOptions.includes(option.id)}
                      //   onChange={() => handleCheckboxChange(option.id)}
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
                  <div className="flex flex-col">
                    <label className="my-2 text-sm font-medium">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your current password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2 text-gray-500"
                        onClick={handleTogglePasswordVisibility}
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477 0 12 0c.7 0 1.392.071 2.075.212"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3.055 11.13a9.965 9.965 0 011.07-1.514L3.04 "
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="my-2 text-sm font-medium">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your new password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2 text-gray-500"
                        onClick={handleTogglePasswordVisibility}
                      >
                        {showPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M.13 "
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="my-2 text-sm font-medium">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2 text-gray-500"
                        onClick={handleTogglePasswordVisibility}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 "
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end py-4">
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                    Save Changes
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
      <div className="mb-4">
        <button
          className={`${
            activeTab === "editAccount"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-lg mr-2`}
          onClick={() => setActiveTab("editAccount")}
        >
          Edit Account
        </button>
        <button
          className={`${
            activeTab === "myProfile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-lg`}
          onClick={() => setActiveTab("myProfile")}
        >
          My Profile
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">{renderContent()}</div>
    </div>
  );
};

export default Settings;
