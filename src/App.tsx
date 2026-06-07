import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ToolsPage from "./pages/ToolsPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
