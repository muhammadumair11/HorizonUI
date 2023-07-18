// Providers
import { RouterProvider } from "react-router-dom";

// Provider Object
import { router } from "./Router/router";

function App() {
    return <RouterProvider router={router} />;
}

export default App;
