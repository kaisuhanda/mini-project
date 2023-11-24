import DashboardPage from "./pages/dashboard"
import AuthPage from "./pages/auth"
import EventPage from "./pages/event"
import EventDetails from "./pages/eventDetails"
import NotFoundPage from "./pages/404"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<DashboardPage />}/>
      <Route path="/events" element={<EventPage />}/>
      <Route path="/event-details/:event_id" element={<EventDetails />}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>
  )
}

export default App
