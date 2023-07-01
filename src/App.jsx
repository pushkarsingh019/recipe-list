import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/recipe/:id" element={<RecipeScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
