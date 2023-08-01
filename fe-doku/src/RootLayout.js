import { Outlet } from "react-router-dom";

import Sidebars from "./components/ui/Sidebars";
import { Fragment } from "react";

const RootLayout = () => {
    return (
        <Fragment>
            <div className="flex h-screen w-screen overflow-x-hidden bg-main-bg">
                <div className="absolute">
                    <Sidebars />
                </div>
                    <div className="ml-20 sm:ml-30 lg:ml-56 bg-red-500 w-screen">
                        <main className=" bg-main-bg pt-4 flex-1 ">
                            <Outlet />
                        </main>

                    </div>
            </div>
        </Fragment>
    )
}

export default RootLayout