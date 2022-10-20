import { useDispatch } from "react-redux";
import { logout } from "../Features/sysConfig/sysConfigSlice";
import { Button } from "antd";
import { toast } from "react-toastify";

const Logout = () => {

    const dispatch = useDispatch();

    const doLogout = () => {
        dispatch(
            logout()
        );    
        toast("Logged Out successfully!");
    }    

    return(   
        <Button type="primary" onClick={doLogout}>Logout</Button>
    )
}

export default Logout;