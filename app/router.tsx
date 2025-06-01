// // // router.tsx
// // import { createBrowserRouter, Outlet } from "react-router-dom";

// // import HomePage from "@/pages/Home/Home";
// // import Login from "./pages/Login/Login";
// // import SignUp from "./pages/Signup/Signup";
// // import RootWrapper from "@/layout/RootWrapper";
// // import MainLayout from "@/layout/MainLayout";
// // // import path from "path";
// // import Components from "./pages/Components/Components";
// // import CartPage from "./pages/Cart/Cart";
// // import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
// // // import AdminLayout from "./layout/AdminLayout";
// // import AdminComponents from "./pages/admin/AdminComponents.tsx/AdminComponents";
// // import AdminPermission from "./pages/admin/AdminPermission.tsx/AdminPermission";
// // import AdminPurchaseHistoryPage from "./pages/admin/AdminPurchaseHistory/AdminPurchaseHistory";
// // import PurchaseHistoryPage from "./pages/PurchaseHistory/PurchaseHistory";
// // // import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";

// // const mainLayoutRoutes = [
// //   {
// //     path: "/",
// //     index: true,
// //     element: <HomePage />,
// //   },
// //   {
// //     path: "/components",
// //     element: <Components />,
// //   },
// //   {
// //     path: "/cart",
// //     element: <CartPage />,
// //   },
// //   {
// //     path: "/purchases",
// //     element: <PurchaseHistoryPage />,
// //   },
// // ];

// // const adminRoutes = [
// //   {
// //     path: "/admin",
// //     index: true,
// //     element: <AdminDashboard />,
// //   },
// //   {
// //     path: "/admin/components",
// //     element: <AdminComponents />,
// //   },
// //   {
// //     path: "/admin/permissions",
// //     element: <AdminPermission />,
// //   },
// //   {
// //     path: "/admin/purchases",
// //     element: <AdminPurchaseHistoryPage />,
// //   },
// // ];

// // // const cartRoutes = [
// // //   {
// // //     path: "/cart",
// // //     element: <CartPage />,
// // //   },
// // //   {
// // //     path: "/request",
// // //     element: <AdminRequestsPage />,
// // //   },
// // // ];

// // // const cartRoutes = [
// // //   {
// // //     index: true,
// // //     element: <CartPage />,
// // //   },
// // //   // {
// // //   //   path: "request",
// // //   //   element: <AdminRequestsPage />,
// // //   // },
// // // ];

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <RootWrapper />,
// //     children: [
// //       {
// //         path: "/",
// //         element: <MainLayout />,
// //         children: mainLayoutRoutes,
// //       },
// //       {
// //         path: "/admin",
// //         element: <Outlet />,
// //         children: adminRoutes,
// //       },
// //       {
// //         path: "/auth/login",
// //         element: <Login />,
// //       },
// //       {
// //         path: "/auth/signup",
// //         element: <SignUp />,
// //       },
// //       // {
// //       //   path: "/cart",
// //       //   element: <CartLayout children={undefined} />,
// //       //   children: cartRoutes,
// //       // },
// //     ],
// //   },
// // ]);

// // export default router;

// // import React from "react";

// // import { Router, Route } from "react-router-dom";
// // import Home from "./pages/Home/Home";

// // const router = () => {
// //   return (
// //     <Router>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/about" element={<div>About</div>} />
// //     </Router>
// //   );
// // };

// // export default router;

// // router.tsx
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Outlet,
// } from "react-router-dom";

// import HomePage from "@/pages/Home/Home";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/Signup/Signup";
// import RootWrapper from "@/layout/RootWrapper";
// import MainLayout from "@/layout/MainLayout";
// import Components from "./pages/Components/Components";
// import CartPage from "./pages/Cart/Cart";
// import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
// import AdminComponents from "./pages/admin/AdminComponents.tsx/AdminComponents";
// import AdminPermission from "./pages/admin/AdminPermission.tsx/AdminPermission";
// import AdminPurchaseHistoryPage from "./pages/admin/AdminPurchaseHistory/AdminPurchaseHistory";
// import PurchaseHistoryPage from "./pages/PurchaseHistory/PurchaseHistory";
// import ProtectedAdminRoute from "./components/ProtectedAdminRoute/ProtectedAdminRoute";
// import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";
// import Contact from "./pages/Contact/Contact";

// const AppRouter = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<RootWrapper />}>
//         {/* Main layout routes */}
//         <Route element={<MainLayout />}>
//           <Route index element={<HomePage />} />
//           <Route path="contact" element={<Contact />} />
//           <Route
//             path="components"
//             element={
//               <ProtectedRoute>
//                 <Components />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="cart"
//             element={
//               <ProtectedRoute>
//                 <CartPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="purchases"
//             element={
//               <ProtectedRoute>
//                 <PurchaseHistoryPage />
//               </ProtectedRoute>
//             }
//           />
//         </Route>

//         {/* Admin routes */}
//         {/* <Route path="admin" element={<Outlet />}>
//           <Route index element={<AdminDashboard />} />
//           <Route path="components" element={<AdminComponents />} />
//           <Route path="permissions" element={<AdminPermission />} />
//           <Route path="purchases" element={<AdminPurchaseHistoryPage />} />
//         </Route> */}

//         <Route path="admin" element={<Outlet />}>
//           <Route
//             index
//             element={
//               <ProtectedAdminRoute>
//                 <AdminDashboard />
//               </ProtectedAdminRoute>
//             }
//           />
//           <Route
//             path="components"
//             element={
//               <ProtectedAdminRoute>
//                 <AdminComponents />
//               </ProtectedAdminRoute>
//             }
//           />
//           <Route
//             path="permissions"
//             element={
//               <ProtectedAdminRoute>
//                 <AdminPermission />
//               </ProtectedAdminRoute>
//             }
//           />
//           <Route
//             path="purchases"
//             element={
//               <ProtectedAdminRoute>
//                 <AdminPurchaseHistoryPage />
//               </ProtectedAdminRoute>
//             }
//           />
//         </Route>

//         {/* Auth routes */}
//         <Route path="auth/login" element={<Login />} />
//         <Route path="auth/signup" element={<SignUp />} />
//       </Route>
//     </Routes>
//   </Router>
// );

// export default AppRouter;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import HomePage from "@/pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import RootWrapper from "@/layout/RootWrapper";
import MainLayout from "@/layout/MainLayout";
import Components from "./pages/Components/Components";
import CartPage from "./pages/Cart/Cart";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import AdminComponents from "./pages/admin/AdminComponents.tsx/AdminComponents";
import AdminPermission from "./pages/admin/AdminPermission.tsx/AdminPermission";
import AdminPurchaseHistoryPage from "./pages/admin/AdminPurchaseHistory/AdminPurchaseHistory";
import PurchaseHistoryPage from "./pages/PurchaseHistory/PurchaseHistory";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute/ProtectedAdminRoute";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoutes";
import Contact from "./pages/Contact/Contact";

const AppRouter = () => (
  <Router basename="/cnerlabs">
    {" "}
    {/* Add basename here */}
    <Routes>
      <Route path="/" element={<RootWrapper />}>
        {/* Main layout routes */}
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="components"
            element={
              <ProtectedRoute>
                <Components />
              </ProtectedRoute>
            }
          />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="purchases"
            element={
              <ProtectedRoute>
                <PurchaseHistoryPage />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* Admin routes */}
        <Route path="admin" element={<Outlet />}>
          <Route
            index
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="components"
            element={
              <ProtectedAdminRoute>
                <AdminComponents />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="permissions"
            element={
              <ProtectedAdminRoute>
                <AdminPermission />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="purchases"
            element={
              <ProtectedAdminRoute>
                <AdminPurchaseHistoryPage />
              </ProtectedAdminRoute>
            }
          />
        </Route>

        {/* Auth routes */}
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<SignUp />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
