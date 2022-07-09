/* eslint-disable require-jsdoc */
import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Add } from "./Pages/Add";
import { Filter } from "./Pages/Filter";
function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="create" element={<Add id={0} onChangeCards={null} />} />
                <Route path="filter" element={<Filter />} />
                <Route path="/*"element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
