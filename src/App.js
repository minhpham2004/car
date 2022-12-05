import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { publicRoutes } from "./Layout/routes"
import DefaultLayout from "./Layout/DefaultLayout/defaultLayout";
import PageNotFound from "./Layout/DefaultLayout/PageNotFound";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component

            // const Layout = route.layout === null ? Fragment : DefaultLayout
            
            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout> <Page /> </Layout>} />
            )
          })}

          <Route path="*" component={PageNotFound} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
