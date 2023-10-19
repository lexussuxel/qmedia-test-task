import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/products',
        element: <ProductsPage />,
    }
]);

export default router;