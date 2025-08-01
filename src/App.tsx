import React from "react";
import { Users } from "./components/Users";
import { Developers } from "./components/Developers";
import { Admins } from "./components/Admins";
import { Moderators } from "./components/Moderators";

const App: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex flex-col justify-center items-center p-10 gap-4">
                <Users />
                <Developers />
                <Admins/>
                <Moderators/>
            </div>
        </div>
    );
};

export default App;
