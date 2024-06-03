// src/App.jsx
import { Upload } from './pages/Upload';
import './App.css'; // Import global styles
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Upload></Upload>}/>
        </Routes>
    </BrowserRouter>
        );
};

export default App;
