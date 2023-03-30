import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Main from "./pages/MainPage/Main";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import AzkarsContent from "./components/AzkarsContent/AzkarsContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useResetScroll } from "./utils/resetScroll";
import RegiaterForm from "./components/RegisterForm/RegisterForm";
import UserPage from "./pages/UserPage/UserPage";
import { AuthorizationContext } from "./context";
import ApiService from "./api/ApiService";
import AdminPanel from "./pages/AdminPage/AdminPanel";

const clientQuery = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  const { setUser }: any = React.useContext(AuthorizationContext);
  const token = document.cookie.match(/token=(.+?)(;|$)/);
  const id = document.cookie.match(/id=(.+?)(;|$)/);

  React.useEffect(() => {
    if (token && id) {
      const fetchData = async () => {
        const user = await ApiService.getUserData(id[1], token[1]);
        setUser(user);
      };
      fetchData();
    }
  }, []);

  useResetScroll();
  return (
    <QueryClientProvider client={clientQuery}>
      {token ? (
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:type" element={<AzkarsContent />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registerForm" element={<RegiaterForm />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:type" element={<AzkarsContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registerForm" element={<RegiaterForm />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </>
      )}
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
