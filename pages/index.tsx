import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import Navbar from "components/NavBar";
import { store } from "context/store";
import router from "next/router";
import { useContext, useEffect } from "react";

export default function Index(): JSX.Element {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;
  const { dispatch } = useContext(store);

  useEffect(() => {
    if (error) {
      router.push("/error");
    }
  }, [error]);

  return (
    <>
      <div
        className={`hidden base:block w-full h-screen bg-white overflow-x-hidden`}
      >
        <div
          className="relative z-20 overflow-visible h-full min-h-screen w-screen bg-center bg-cover bg-no-repeat bg-hero-pattern"
          style={{ height: "111%" }}
        >
          <div className="pt-10 2xl:pt-12">
            <Navbar />
            <h1>Popcorn Foundation Website</h1>
          </div>
        </div>
      </div>
    </>
  );
}
