import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/vacations">My Vacations</Link>
      &nbsp; &nbsp;
      <Link to="/vacations/new">New Vacation</Link>
      &nbsp; &nbsp; Welcome, {user.name}
      &nbsp; &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
