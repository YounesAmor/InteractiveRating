import "./App.css";
import MainInteractiveCard from "./components/ratingCard";
import ThankYouPage from "./components/thankYou";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App bg-veryDarkBlue w-screen h-screen">
      <BrowserRouter>
        <div className="w-full h-full grid place-content-center">
          <Routes>
            <Route path="/" element={<MainInteractiveCard />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
