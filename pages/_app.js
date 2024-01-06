import "@/styles/globals.scss";
import dynamic from "next/dynamic";
import { Roboto_Slab } from "next/font/google";
import Layout from "@/Layouts/Layout";
import { Tooltip } from "react-tooltip";
// import { Toaster } from "react-hot-toast";
const Toaster = dynamic(() => import("react-hot-toast").then(module => module.Toaster), { ssr: false });

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${roboto_slab.className}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
      <Tooltip id="my-tooltip-data-html" />
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
    </>
  );
}
