import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';
import DashboardLoaderPage from './../src/pages/dashboard-loader';
import ProjectSlider from '@/pages/project/projects-slider';

const HomeScreen = React.lazy(() => import('../src/pages/homescreen/home-screen'));
const AboutScreen = React.lazy(() => import('../src/pages/about/about-screen'));
const ProjectScreen = React.lazy(() => import('../src/pages/project/projects'));
const CostPlanningScreen = React.lazy(() => import('../src/pages/costplaning/cost-planning'));
const ContactScreen = React.lazy(() => import('../src/pages/contact/contact-screen'));
const Activity = React.lazy(() => import('../src/pages/activity/activity'))

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
          path="/about"
          element={
            <React.Suspense fallback={<DashboardLoaderPage />}>
               <AboutScreen/>
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/activity"
          element={
            <React.Suspense fallback={<DashboardLoaderPage />}>
               <Activity/>
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
