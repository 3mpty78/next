import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
      return (
            <main>
                  <div className="header">
                        <h1>
                              Next <span>!</span>
                        </h1>
                  </div>
                  <TodoList />
            </main>
      );
};

export default App;
