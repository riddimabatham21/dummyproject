import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserLoggedUser, getAllUser } from "../apiCalls/user"; // your API call
import { allUser, setUser } from "../rudux/userSlice";
import toast from "react-hot-toast";

const ProtectRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userState);

  const getLoggedUser = async () => {
    try {
      const response = await getUserLoggedUser(); // should return { success, data }
      if (response.success) {
        dispatch(setUser(response.data)); // update Redux
      } else {
        toast.error(response.message);
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Session expired. Please login again.");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const getAllUserfromdb = async () => {
    let response = null;
    try {
      response = await getAllUser();

      if (response.success) {
        dispatch(allUser(response.data)); // update Redux
        // toast.success(response.data);
      } else {
        toast.error(response.message);
        window.location.href = "/login";
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else if (!user) {
      getLoggedUser();
      getAllUserfromdb();
    }
  }, [user, navigate]);

  // Show nothing or a spinner while user is being fetched
  if (!user) return <p>Loading...</p>;

  return <>{children}</>;
};

export default ProtectRoute;
