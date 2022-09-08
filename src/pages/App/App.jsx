import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewVacationPage from "../NewVacationPage/NewVacationPage";
import VacationIndexPage from "../VacationIndexPage/VacationIndexPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import * as vacationApi from "../../utilities/vacations-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [vacations, setVacations] = useState([]);

  async function addVacation(formData) {
    console.log("test1");
    let vacations = await vacationApi.newVacation(formData);
    console.log(vacations, "testing");
    setVacations(vacations);
  }
  useEffect(() => {
    async function getVacation() {
      let data = await vacationApi.getVacation();
      console.log("taco", data);
      setVacations(data);
    }
    getVacation();
  }, []);
  console.log("vacations", vacations);
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route
              path="/vacations/new"
              element={<NewVacationPage addVacation={addVacation} />}
            />
            <Route
              path="/vacations"
              element={<VacationIndexPage vacations={vacations} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
