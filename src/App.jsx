// import {
//   useEffect,
//   useState
// } from "react";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";

// import Layout from "./components/Layout";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Workflow from "./pages/Workflow";
// import Inventory from "./pages/Inventory";
// import Orders from "./pages/Orders";
// import Activity from "./pages/Activity";
// import Settings from "./pages/Settings";
// import VerifyEmail from "./pages/VerifyEmail";
// import Payments from "./pages/Payments";

// import { api } from "./services/api";

// function ProtectedRoute({
//   user,
//   children
// }) {
//   if (!user) {
//     return (
//       <Navigate
//         to="/login"
//         replace
//       />
//     );
//   }

//   return children;
// }

// export default function App() {
//   const [user, setUser] =
//     useState(null);

//   const [checkingAuth, setCheckingAuth] =
//     useState(true);

//   useEffect(() => {
//     api.me()
//       .then(data => {
//         setUser(data.user);
//       })
//       .catch(() => {
//         setUser(null);
//       })
//       .finally(() => {
//         setCheckingAuth(false);
//       });
//   }, []);

//   async function logout() {
//     try {
//       await api.logout();
//     } finally {
//       setUser(null);
//     }
//   }

//   if (checkingAuth) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-50">
//         <div className="text-center">
//           <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-950" />

//           <p className="mt-4 text-sm text-slate-400">
//             Loading FlowPilot...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             user ? (
//               <Navigate to="/" />
//             ) : (
//               <Login
//                 onLogin={setUser}
//               />
//             )
//           }
//         />

//         <Route
//           path="/register"
//           element={
//             user ? (
//               <Navigate to="/" />
//             ) : (
//               <Register />
//             )
//           }
//         />

//         <Route
//           path="/verify-email"
//           element={
//             user ? (
//               <Navigate to="/" />
//             ) : (
//               <VerifyEmail />
//             )
//           }
//         />

//         <Route
//           element={
//             <ProtectedRoute
//               user={user}
//             >
//               <Layout
//                 user={user}
//                 onLogout={logout}
//               />
//             </ProtectedRoute>
//           }
//         >
//           <Route
//             path="/"
//             element={
//               <Dashboard />
//             }
//           />

//           <Route
//             path="/workflow"
//             element={
//               <Workflow />
//             }
//           />

//           <Route
//             path="/inventory"
//             element={
//               <Inventory />
//             }
//           />

//           <Route
//             path="/payments"
//             element={
//               <Payments />
//             }
//           />

//           <Route
//             path="/orders"
//             element={
//               <Orders />
//             }
//           />

//           <Route
//             path="/activity"
//             element={
//               <Activity />
//             }
//           />

//           <Route
//             path="/settings"
//             element={
//               <Settings />
//             }
//           />
//         </Route>

//         <Route
//           path="*"
//           element={
//             <Navigate to="/" />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }



import {
  useEffect,
  useState
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Layout from "./components/Layout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Workflow from "./pages/Workflow";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Activity from "./pages/Activity";
import Settings from "./pages/Settings";
import VerifyEmail from "./pages/VerifyEmail";
import Payments from "./pages/Payments";

import {
  api,
  getStoredToken
} from "./services/api";


function ProtectedRoute({
  user,
  children
}) {

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}


export default function App() {

  const [user, setUser] =
    useState(null);

  const [checkingAuth, setCheckingAuth] =
    useState(true);


  useEffect(() => {

    async function restoreSession() {

      const token =
        getStoredToken();

      // No saved token means
      // there is no session to restore.
      if (!token) {

        setCheckingAuth(false);

        return;
      }


      try {

        const data =
          await api.me();

        if (data?.user) {

          setUser(data.user);

        } else {

          setUser(null);

        }

      } catch (error) {

        console.error(
          "Session restoration failed:",
          error
        );

        setUser(null);

      } finally {

        setCheckingAuth(false);

      }
    }


    restoreSession();

  }, []);


  async function logout() {

    try {

      await api.logout();

    } catch (error) {

      console.error(
        "Logout error:",
        error
      );

    } finally {

      setUser(null);

    }
  }


  // IMPORTANT:
  // Do not render the routes until
  // we know whether the user is authenticated.

  if (checkingAuth) {

    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">

        <div className="text-center">

          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-slate-950" />

          <p className="mt-4 text-sm text-slate-400">
            Loading FlowPilot...
          </p>

        </div>

      </div>
    );
  }


  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}

        <Route
          path="/login"
          element={
            user ? (
              <Navigate
                to="/"
                replace
              />
            ) : (
              <Login
                onLogin={setUser}
              />
            )
          }
        />


        {/* REGISTER */}

        <Route
          path="/register"
          element={
            user ? (
              <Navigate
                to="/"
                replace
              />
            ) : (
              <Register />
            )
          }
        />


        {/* EMAIL VERIFICATION */}

        <Route
          path="/verify-email"
          element={
            user ? (
              <Navigate
                to="/"
                replace
              />
            ) : (
              <VerifyEmail />
            )
          }
        />


        {/* PROTECTED APPLICATION */}

        <Route
          element={
            <ProtectedRoute
              user={user}
            >
              <Layout
                user={user}
                onLogout={logout}
              />
            </ProtectedRoute>
          }
        >

          <Route
            path="/"
            element={
              <Dashboard />
            }
          />

          <Route
            path="/workflow"
            element={
              <Workflow />
            }
          />

          <Route
            path="/inventory"
            element={
              <Inventory />
            }
          />

          <Route
            path="/payments"
            element={
              <Payments />
            }
          />

          <Route
            path="/orders"
            element={
              <Orders />
            }
          />

          <Route
            path="/activity"
            element={
              <Activity />
            }
          />

          <Route
            path="/settings"
            element={
              <Settings />
            }
          />

        </Route>


        {/* FALLBACK */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

