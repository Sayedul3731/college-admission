import { NavLink } from "react-router-dom";


const Navbar = () => {
    const activeDesign = "font-semibold px-2 py-1 rounded-md text-white bg-blue-500 mx-5";
    const pendingDesign = "lg:text-md lg:font-medium md:font-medium mx-5";
    const navLinks = <>
        <NavLink className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `${activeDesign}` : `${pendingDesign}`} to="/" >
            Home
        </NavLink>
        <NavLink to="/college" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `${activeDesign}` : `${pendingDesign}`}>College</NavLink>
        <NavLink to="/admission" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `${activeDesign}` : `${pendingDesign}`}>Admission</NavLink>
        <NavLink to="/my-college" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? `${activeDesign}` : `${pendingDesign}`}>My College</NavLink>
    </>
    return (
        <div className="py-5 shadow-md text-center">
            {navLinks}
        </div>
    );
};

export default Navbar;