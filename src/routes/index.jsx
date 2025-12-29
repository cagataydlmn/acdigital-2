import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Hakkimizda from "../pages/Hakkimizda";
import Portfoy from "../pages/Portfoy";
import Hizmetler from "../pages/Hizmetler";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Iletisim from "../pages/Iletisim";
import NotFound from "../pages/NotFound";
import Eticaret_cözümleri from "../components/services/Eticaret_cözümleri";
import SosyalMedyaCalismalari from "../components/services/SosyalMedyaCalismalari";
import GoogleAds from "../components/services/GoogleAds";
import MetaAds from "../components/services/MetaAds";
import KurumsalKimlikTasarimi from "../components/services/KurumsalKimlikTasarimi";
import Seo from "../components/services/Seo";
import WebTasarimUygulama from "../components/services/WebTasarimUygulama";
import Denemene from "../pages/deneme";
import GizlilikPolitikasi from "../pages/GizlilikPolitikasi";
import KullanimKosullari from "../pages/KullanimKosullari";
import CerezPolitikasi from "../pages/CerezPolitikasi";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/hakkimizda",
        element: <Hakkimizda />,
      },
      {
        path: "/portfoy",
        element: <Portfoy />,
      },
      {
        path: "/hizmetler",
        element: <Hizmetler />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetail />,
      },
      {
        path: "/iletisim",
        element: <Iletisim />,
      },
      {
        path: "/hizmetler/eticaret-cozumleri",
        element: <Eticaret_cözümleri />,
      },
      {
        path: "/hizmetler/sosyal-medya",
        element: <SosyalMedyaCalismalari />,
      },
      {
        path: "/hizmetler/GoogleAds",
        element: <GoogleAds />,
      },
      {
        path: "/hizmetler/Meta-ads",
        element: <MetaAds />,
      },
      {
        path: "/hizmetler/kurumsal-kimlik",
        element: <KurumsalKimlikTasarimi />,
      },
      {
        path: "/hizmetler/seo",
        element: <Seo />,
      },
      {
        path: "/hizmetler/web-tasarim",
        element: <WebTasarimUygulama />,
      },
      {
        path:"/deneme",
        element:<Denemene/>
      },
      {
        path: "/gizlilik-politikasi",
        element: <GizlilikPolitikasi />,
      },
      {
        path: "/kullanim-kosullari",
        element: <KullanimKosullari />,
      },
      {
        path: "/cerez-politikasi",
        element: <CerezPolitikasi />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default routes;
