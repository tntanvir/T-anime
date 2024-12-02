import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button,
} from "@material-tailwind/react";
import { DrawerDefault } from "./DrawerDefault";
import { HiMenuAlt2 } from "react-icons/hi";


function NavList({ openNav, setOpenNav }) {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white bg-[#111827]">
            <Typography
                as="li"
                variant="small"

                className="p-1 font-medium"
                onClick={() => setOpenNav(!openNav)}
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-medium"
                onClick={() => setOpenNav(!openNav)}
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"

                className="p-1 font-medium"
                onClick={() => setOpenNav(!openNav)}
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"

                className="p-1 font-medium"
                onClick={() => setOpenNav(!openNav)}
            >
                <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Docs
                </a>
            </Typography>
        </ul>
    );
}

export function NavbarSimple({ openDrawer, closeDrawer }) {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className=" max-w-screen p-0 m-0 text-white border-none  rounded-none bg-[#111827]" >
            <div className="flex items-center justify-between text-white bg-[#111827] px-6 py-3">
                <div className="flex justify-center items-center gap-3">
                    {/* <Button >Open Drawer</Button> */}
                    <div onClick={openDrawer} className="cursor-pointer text-3xl">
                        <HiMenuAlt2 />
                    </div>
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5"
                    >
                        <span className="text-3xl">

                            T
                        </span>
                        <span className="text-2xl">Anime</span>
                    </Typography>
                </div>
                <div className="hidden lg:block">
                    <NavList />
                </div>

                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <div>Close</div>
                    ) : (
                        <div>Open</div>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav} className="bg-[#111827]">
                <NavList openNav={openNav} setOpenNav={setOpenNav} />
            </Collapse>
        </Navbar>
    );
}