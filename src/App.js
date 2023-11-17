import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";
import { Notifications } from 'react-push-notification';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {/* <Notifications /> */}
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </div>
  );
}

export default App;
