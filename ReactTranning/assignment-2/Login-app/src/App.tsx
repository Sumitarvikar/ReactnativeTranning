import LoginComponent from "./Component/LoginComponent";
import React from "react"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListComponent from "./Component/UserListComponent";
import FetchUserComponent from "./Component/FetchUserComponent";


function App() {
  const EnhancedUserList = FetchUserComponent(UserListComponent);
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="/userlist" element={<EnhancedUserList />} />
    </Routes>
  </Router>
  )
}

export default App;
function withUserData(UserListComponent: React.FC<{ users: import("./Interfaces/interface").Iuser[] | null; }>) {
  throw new Error("Function not implemented.");
}

