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
      <div className="logo">Vacation Tracker</div>
      <div className="nvbutton">
        <Link to="/vacations">My Vacations</Link>
        <Link to="/vacations/new">New Vacation</Link>
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
        &nbsp; &nbsp; Welcome, {user.name}
        &nbsp; &nbsp;
      </div>
    </nav>
  );
}
