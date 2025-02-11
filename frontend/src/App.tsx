import './App.css';
import { MainPage } from './Pages/mainPage/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Manager } from './Pages/managerPage/Manager.tsx';
import { PageWrapper } from './Pages/PageWrapper/PageWrapper.tsx';
import { Settings } from './Pages/Settings/Settings.tsx';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageWrapper><MainPage /></PageWrapper>} />
            <Route path="/manager/:id" element={<PageWrapper><Manager /></PageWrapper>}/>
            <Route path="/settings" element={<PageWrapper><Settings /></PageWrapper>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
