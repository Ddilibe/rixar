import './App.css';
import { LandingProvider } from './context/landingpage-context';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from './pages/home';
import { useEffect } from 'react';
import Links from './data/links';
import OurCompany from './pages/our-company';
import CompanyOverview from './pages/company-overview';
import WorkProgress from './pages/work-progress';
import Management from './pages/management';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/")
      navigate(Links.HOME);
  })
  return (
    <main className='w-full flex flex-col gap-20 items-center'>
      <LandingProvider>
        <Routes>
          <Route path={Links.HOME} element={<Home />} />
          <Route path={Links.ABOUT.OUR_COMPANY} element={<OurCompany />} />
          <Route path={Links.ABOUT.COMPANY_OVERVIEW} element={<CompanyOverview />} />
          <Route path={Links.ABOUT.WORK_PROGRESS} element={<WorkProgress />} />
          <Route path={Links.ABOUT.MANAGEMENT} element={<Management />} />
        </Routes>
      </LandingProvider>
    </main >
  )
}

export default App
