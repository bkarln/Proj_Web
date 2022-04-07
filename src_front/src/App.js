import React from "react";
import Sidebar from "./components/sidebar/sidebar.jsx";
import Main from "./pages/main/main.jsx";
import TasksTable from "./pages/tasks-table/tasks-table.jsx";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import MobileSidebar from "./components/mobile-sidebar/mobile-sidebar";

function App() {
  return (
    <BrowserRouter>
      <main className="row">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/task-table" component={TasksTable} />
        </Switch>
        <MobileSidebar />
      </main>
    </BrowserRouter>
  );
}

export default App;
