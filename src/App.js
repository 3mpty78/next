import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
      return (
            <>
                  <main>
                        <div className="header">
                              <h1>
                                    Next <span>!</span>
                              </h1>
                        </div>
                        <TodoList />
                        <p
                              style={{
                                    color: "var(--white)",
                                    fontFamily: "comfortaa",
                                    bottom: 5,
                              }}>
                              Developped by{" "}
                              <span
                                    style={{
                                          color: "var(--darkBlue)",
                                    }}>
                                    3mpty
                              </span>
                        </p>
                  </main>
            </>
      );
};

export default App;
