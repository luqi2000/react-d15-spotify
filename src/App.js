import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumPage from "./components/AlbumPage.jsx";
import ArtistPage from "./components/ArtistPage";

import Sidebar from "./components/Sidebar";

import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/artist:artistId" element={<ArtistPage />} />
          <Route path="/album:albumId" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
