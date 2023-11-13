import DashboardPage from "./pages/dashboard"
import AuthPage from "./pages/auth"
import NotFoundPage from "./pages/404"
import ManageEventPage from "./pages/ManageEvents"
import CreateEventPage from "./pages/CreateEvent"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<ManageEventPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
