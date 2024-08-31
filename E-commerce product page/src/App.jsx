import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CollectionPage from "./pages/CollectionPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import RootLayout from "./pages/Root";
import WomenPage from "./pages/WomenPage";
import { CartContextProvider } from "./store/cart-context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "collections", element: <CollectionPage /> },
        { path: "men-page", element: <MenPage /> },
        { path: "women-page", element: <WomenPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
      ],
    },
  ]);

  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
