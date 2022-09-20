import { useState, useCallback, useMemo } from "react";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";

import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <InlineStyle />
            <CssModules />
        </div>
    );
}
