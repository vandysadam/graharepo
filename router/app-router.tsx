import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';
import DashboardLoaderPage from './../src/pages/dashboard-loader';
import ProjectSlider from '../src/pages/project/projects-slider';
const HomeScreen = React.lazy(() => import('../src/pages/homescreen/home-screen'));
const TentangKamiScreen = React.lazy(() => import('../src/pages/tentangkami/tentangkami-screen'));
const ProjectScreen = React.lazy(() => import('../src/pages/project/projects'));
const CostPlanningScreen = React.lazy(() => import('../src/pages/costplaning/cost-planning'));
const ContactScreen = React.lazy(() => import('../src/pages/contact/contact-screen'));
const Layanan = React.lazy(() => import('../src/pages/layanan/layanan'))

const AppRouter: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html')!.style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html')!.style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<DashboardLoaderPage />}>
                <HomeScreen />
            </React.Suspense>
          }
        />
        <Route
          path="/TentangKami"
          element={
            <React.Suspense fallback={<DashboardLoaderPage />}>
               <TentangKamiScreen/>
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/Layanan"
          element={
            <React.Suspense fallback={<DashboardLoaderPage />}>
               <Layanan/>
            </React.Suspense>
          }
        ></Route>
        <Route>
          <Route
            path="/project"
            element={
              <React.Suspense fallback={<DashboardLoaderPage />}>
                <ProjectScreen />
                
              </React.Suspense>
            }
          />
          <Route path="/project/:id" element={<ProjectSlider />}></Route>
        </Route>
        {/* <Route
          path="/project"
          element={
            <React.Suspense fallback={<DashboardLoaderPage />}>
                <ProjectScreen />
                <Routes>
                  <Route path=":id" element={<DashboardLoaderPage />}></Route>


                </Routes>
            </React.Suspense>
          }
        ></Route> */}
        <Route 
          path="/costplaning" 
          element={
            <React.Suspense fallback={<DashboardLoaderPage />}>
                <CostPlanningScreen />
                
            </React.Suspense>}
        ></Route>
        <Route 
          path="/contact" 
          element={
            <React.Suspense fallback={<DashboardLoaderPage />}>
                <ContactScreen />
            </React.Suspense>}
        ></Route>   
      </Routes>
      
      {/* <Toaster /> */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AppRouter;
