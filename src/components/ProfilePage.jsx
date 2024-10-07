import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    phone: "",
    website: "",
    companyName: "",
    catchPhrase: "",
    businessStatement: "",
    profilePicture: "https://via.placeholder.com/150",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      const res = await fetch(
        "https://boolean-uk-api-server.fly.dev/IbbiSecka/post",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        console.error("Failed to fetch user profile");
        return;
      }

      const data = await res.json();
      setUser({
        ...data,
        profilePicture:
          data.profilePicture || "https://via.placeholder.com/150",
      });
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Profile</h2>

      <div className="flex flex-col items-center mb-6">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-gray-300 mb-2"
        />
        <h3 className="text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</h3>
        <p className="text-gray-600">{user.username}</p>
      </div>

      <form>
        <h3 className="font-semibold text-lg mb-2">Account Info</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              value={user.firstName}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              value={user.lastName}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              value={user.username}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={user.email}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2">Address</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">Street</label>
            <input
              type="text"
              value={user.street}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Suite</label>
            <input
              type="text"
              value={user.suite}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              value={user.city}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Zipcode</label>
            <input
              type="text"
              value={user.zipcode}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2">Contact Info</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              value={user.phone}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Website</label>
            <input
              type="text"
              value={user.website}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2">Company</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={user.companyName}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Catch Phrase</label>
            <input
              type="text"
              value={user.catchPhrase}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-1 font-medium">Business Statement</label>
            <textarea
              value={user.businessStatement}
              className="border p-2 rounded w-full bg-gray-100"
              readOnly
            ></textarea>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
