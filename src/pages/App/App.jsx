import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewVacationPage from "../NewVacationPage/NewVacationPage";
import VacationIndexPage from "../VacationIndexPage/VacationIndexPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import * as vacationApi from "../../utilities/vacations-api";
import VacationDetailsPage from "../VacationDetailsPage/VacationDetailsPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [vacations, setVacations] = useState([]);

  async function addVacation(formData) {
    let vacations = await vacationApi.newVacation(formData);
    setVacations(vacations);
  }

  async function addComment(formData, id) {
    let vacations = await vacationApi.newComment(formData, id);
    setVacations(vacations);
  }

  async function deleteComment(vacayId, commentId) {
    let vacations = await vacationApi.deleteComment(vacayId, commentId);
    setVacations(vacations);
  }

  useEffect(() => {
    async function getVacation() {
      let data = await vacationApi.getVacation();
      setVacations(data);
    }
    getVacation();
  }, []);

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
            <Route
              path="/vacations/:hank"
              element={
                <VacationDetailsPage
                  vacations={vacations}
                  addComment={addComment}
                  deleteComment={deleteComment}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
