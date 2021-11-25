import { Web3Provider } from "@ethersproject/providers";
import { Transition } from "@headlessui/react";
import { useWeb3React } from "@web3-react/core";
import { MobileExpandableMenu } from "components/MobileExpandableMenu";
import Navbar from "components/NavBar";
import { store } from "context/store";
import Link from "next/link";
import router from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Facebook, GitHub, Menu, Twitter } from "react-feather";

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
  const [menuVisible, toggleMenu] = useState<boolean>(false);

  return (
    <div className="font-landing">
      {/* MOBILE VERSION */}
      <div className="w-full h-full lg:hidden">
        <Transition
          show={menuVisible}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <MobileExpandableMenu toggleMenuVisible={toggleMenu} />
        </Transition>

        <Transition
          show={!menuVisible}
          enter="transition-opacity duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            <header className="w-full bg-primary">
              <nav className="w-10/12 mx-auto pt-4 pb-3 border-b border-primaryLight flex flex-row items-center justify-between">
                <div>
                  <Link href="/" passHref>
                    <a>
                      {/*TODO The logo is slightly blurred even though its copied straight from figma*/}
                      <img
                        src="/images/logo.png"
                        alt="Logo"
                        className="h-14 flex-grow-0 flex-shrink-0"
                      ></img>
                    </a>
                  </Link>
                </div>
                <Menu onClick={(e) => toggleMenu(true)} />
              </nav>
            </header>
          </div>
        </Transition>
      </div>

      {/* DESKTOP + TABLET VERSION */}
      <div className="hidden lg:flex flex-col w-full h-full">
        <header className="w-full bg-primary">
          <Navbar />
        </header>

        <section className="w-full ">
          <div
            className="bg-footer flex-shrink-0 flex-grow-0 w-full
          h-24 pt-60"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </section>
        <section className="bg-primary">
          <div>
            <div className="w-10/12 mx-auto">
              <Link href="/" passHref>
                <a>
                  {/*TODO The logo is slightly blurred even though its copied straight from figma*/}
                  <img
                    src="/images/logo.png"
                    alt="Logo"
                    className="h-10 flex-shrink-0 flex-grow-0"
                  ></img>
                </a>
              </Link>
              <p className="font-medium text-base py-4">
                Popcorn is a new eco-friendly paradigm for DeFi, where users can
                earn high yield on their crypto assets while creating real world
                impact.
              </p>
              <div className="flex flex-row space-x-4 items-center">
                <Link href="https://github.com/popcorndao" passHref>
                  <GitHub className="hover:text-blue-600 cursor-pointer" />
                </Link>
                <Link href="https://www.facebook.com/PopcornDAO" passHref>
                  <Facebook className="hover:text-blue-600 cursor-pointer" />
                </Link>
                <Link href="https://twitter.com/Popcorn_DAO" passHref>
                  <Twitter className="hover:text-blue-600 cursor-pointer" />
                </Link>
                <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                  <img
                    src="/images/discord.svg"
                    alt="discord"
                    className="w-8 h-8 cursor-pointer discord"
                  ></img>
                </Link>
              </div>
              <div className="flex flex-row justify-evenly py-6">
                <div className="flex flex-col space-y-3 w-1/2">
                  <p className="font-medium text-base uppercase">Site</p>
                  <Link href="/" passHref>
                    <a className="hover:text-blue-600">Home</a>
                  </Link>
                  <Link href="https://medium.com/popcorndao" passHref>
                    <a className="hover:text-blue-600" target="_window">
                      Blog
                    </a>
                  </Link>
                  <Link
                    href="https://etherscan.io/token/0xd0cd466b34a24fcb2f87676278af2005ca8a78c4"
                    passHref
                  >
                    <a className="hover:text-blue-600" target="_window">
                      Popcorn (POP) Token
                    </a>
                  </Link>
                  <Link href="https://launch.popcorn.network/" passHref>
                    <a className="hover:text-blue-600" target="_window">
                      Token Launch Auction
                    </a>
                  </Link>
                </div>
                <div className="flex flex-col space-y-3 w-1/2">
                  <p className="font-medium text-base uppercase">Connect</p>
                  <Link href="https://twitter.com/Popcorn_DAO" passHref>
                    <a className="hover:text-blue-600" target="_window">
                      Twitter
                    </a>
                  </Link>
                  <Link href="https://discord.gg/w9zeRTSZsq" passHref>
                    <a className="hover:text-blue-600" target="_window">
                      Discord
                    </a>
                  </Link>
                  <Link href="https://github.com/popcorndao" passHref>
                    <a className="hover:text-blue-600" target="_window">
                      Github
                    </a>
                  </Link>
                </div>
              </div>
              {/*<div className="flex flex-col space-y-3">
            <p className="font-medium text-base uppercase">Documentation</p>
            <Link href="/" passHref>
              <a className="hover:text-blue-600">Gitbook</a>
            </Link>
          </div>*/}
            </div>
            <div className="w-10/12 border-t border-gray-700 mt-12 mx-auto ">
              <p className="font-base text-center py-4">
                ©2021, Popcorn Network. All Rights Reserved
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
