// React
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./assets/scss/main.scss";

// React Router

// Providers
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

// Provider Objects
import { theme } from "./Theme/theme.ts";
import { store } from "./store.tsx";

// Components
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
);
