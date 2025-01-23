import './App.css';
import {MainPage} from './Pages/mainPage/MainPage.tsx';
import {BrowserRouter, Route, Routes} from 'react-router';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
