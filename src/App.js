import Router from "./router/Router";
import {RouterProvider} from "react-router-dom";
import {AuthProvider} from "./util/AuthContext";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <RouterProvider router={Router}/>
            </AuthProvider>
        </div>
    );
}

export default App;