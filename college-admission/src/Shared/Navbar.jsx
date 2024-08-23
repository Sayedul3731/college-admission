import { NavLink } from "react-router-dom";


const Navbar = () => {
    const samDesign = "font-semibold px-2 py-1 rounded-md hover:text-white hover:bg-blue-500"
    const navLinks = <>
        <NavLink to="/" className={`${samDesign}`}>Home</NavLink>
        <NavLink to="/category" className={`${samDesign}`}>Category</NavLink>
        <NavLink to="/" className={`${samDesign}`}>Best Selling</NavLink>
    </>
    return (
        <div className="py-5 shadow-md text-center">
            {navLinks}
        </div>
    );
};

export default Navbar;