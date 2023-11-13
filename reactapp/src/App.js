import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Authenticate from './components/Authenticate/Authenticate'
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route element={<Authenticate />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/result" element={<Result />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter >
    );
}

export default App;