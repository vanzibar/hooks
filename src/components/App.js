import React, { useState } from "react";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("TODOs")}>TODOs</button>
      </div>
      {resource}
    </div>
  );
};

export default App;
