import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage"
import PlacesFormPage from "./pages/PlacesFormPage";
import BookingPage from "./pages/BookingPage";
import BookingsPages from "./pages/BookingsPage";
import axios from "axios";
import './App.css';


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacesPage />} />
          <Route path="/account/bookings" element={<BookingsPages />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
       </Route>
      </Routes>
      </UserContextProvider>

      )
}

      export default App;
