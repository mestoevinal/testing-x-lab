import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes/routes";



const AppRouter = () => {
    return (
            <Routes>
                {publicRoutes.map(({path, component}:any)=>
                    <Route
                        path={path}
                        element={component}
                        key={path}
                    />
                )}
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
    );
};

export default AppRouter;