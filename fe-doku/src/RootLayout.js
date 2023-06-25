import { Outlet } from "react-router-dom";

import Sidebars from "./components/ui/Sidebars";

const RootLayout = () => {
    return (
        <>
            <div className="flex w-screen h-screen bg-main-bg">
                <div className="relative w-auto">
                    <div className="flex">
                        <Sidebars />
                        <main className="w-full overflow-hidden min-h-screen h-screen scrollbar-hide">
                            <div className="h-full p-6">
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RootLayout