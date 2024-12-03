// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import proximityLogo from '../../../imge/hgv.png'
const NavBar = () => {
    return (
        <div className="navbar fixed z-10 bg-white rounded-2xl text-black w-full">
            <div className="navbar-start w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white">

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/Resources'>Resources</Link></li>

                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost text-2xl items-center"><img className="w-12" src={proximityLogo}></img>ProximityPro</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='relative'><Link className='hover:border-b-2 hover:border-green-300 text-base transition  hover:text-emerald-300 duration-300 pb-1 font-bold ' to='/'>Home</Link></li>
                    <li className='relative'><Link className='hover:border-b-2 hover:border-green-300 transition text-base hover:text-emerald-300 duration-300 pb-1 font-bold' to='/about'>About Us</Link></li>
                    <li className='relative'><Link className='hover:border-b-2 hover:border-green-300 transition text-base hover:text-emerald-300 duration-300 pb-1 font-bold' to='/services'>Services</Link></li>
                    <li className='relative'><Link className='hover:border-b-2 hover:border-green-300 transition text-base hover:text-emerald-300 duration-300 pb-1 font-bold' to='/Resources'>Resources</Link></li>
                </ul>
            </div>
            <div className="navbar-center">
                <Link to='/connect' className="p-2 rounded transition ease-in-out font-bold delay-150 hover:bg-gradient-to-r hover:from-green-500	 hover:to-green-300 hover:-translate-y-1 hover:scale-110 duration-100 bg-green-300 border">
                    Let's Connect
                </Link>
            </div>
        </div>

        // <div className="navbar fixed z-10 bg-white rounded-2xl text-black w-full">
        //     <div className="navbar-start flex items-center justify-between w-full lg:w-auto">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="h-5 w-5"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor">
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         strokeWidth="2"
        //                         d="M4 6h16M4 12h8m-8 6h16" />
        //                 </svg>
        //             </div>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white">

        //                 <li><Link to='/'>Home</Link></li>
        //                 <li><Link to='/about'>About Us</Link></li>
        //                 <li><Link to='/services'>Services</Link></li>
        //                 <li><Link to='/Resources'>Resources</Link></li>

        //             </ul>
        //         </div>
        //         <Link to='/home' className="btn btn-ghost text-2xl flex items-center"><img className="w-12" src={proximityLogo}></img>ProximityPro</Link>
        //     </div>

        //     <div className="navbar-end hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             <li className='relative'><Link className='hover:border-b-2 hover:border-green-300 text-base transition  hover:text-emerald-300 duration-300 pb-1 font-bold ' to='/'>Home</Link></li>
        //             <li className='relative'><Link className='hover:border-b-2 hover:border-green-300 transition text-base hover:text-emerald-300 duration-300 pb-1 font-bold' to='/about'>About Us</Link></li>
        //             <li className='relative'><Link className='hover:border-b-2 hover:border-green-300 transition text-base hover:text-emerald-300 duration-300 pb-1 font-bold' to='/services'>Services</Link></li>
        //             <li className='relative'><Link className='hover:border-b-2 hover:border-green-300 transition text-base hover:text-emerald-300 duration-300 pb-1 font-bold' to='/Resources'>Resources</Link></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end mt-4 lg:mt-0">
        //         <Link to='/connect' className="p-2 rounded transition ease-in-out font-bold delay-150 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 hover:-translate-y-1 hover:scale-110 duration-100 bg-green-300 border">
        //             Let's Connect
        //         </Link>
        //     </div>
        // </div>

    );
};

export default NavBar;