import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import { publicRoutes, adminRoutes } from './routes';
import { Fragment } from 'react';
import AdminLayout from './Layout/AdminLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout>{Page}</Layout>}
            />
          );
        })}
        {adminRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = AdminLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          if (route.path === '/loginAdmin')
            return <Route exact key={index} path={route.path} element={Page} />;
          return (
            <Route
              exact
              key={index}
              path={route.path}
              element={<Layout>{Page}</Layout>}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
