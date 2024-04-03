import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";


export const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:bookid" element={<BookDetails />} />
            <Route path="*" element={<h2> OOPS! 404 Page Not Found</h2>} />
        </Routes>
    )
}