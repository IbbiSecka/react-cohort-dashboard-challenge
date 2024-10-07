import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PostFeed from "./components/Postfeed";
import PostDetailPage from "./components/PostDetailPage";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
            <Routes>
              <Route path="/" element={<PostFeed />} />
              <Route path="/post/:postId" element={<PostDetailPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
export default App