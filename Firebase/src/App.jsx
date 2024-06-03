// src/App.jsx
import { Crud } from './pages/Crud';
import './App.css'; // Import global styles
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Crud></Crud>}/>
        </Routes>
    </BrowserRouter>
        );
};

export default App;
