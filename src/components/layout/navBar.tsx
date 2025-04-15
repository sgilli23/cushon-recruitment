import * as React from "react";
import { NavigationMenu } from "radix-ui";
import Link from "next/link";

const NavBar = () => {
  return (
    <NavigationMenu.Root className="gap-10">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-pink-700 p-5 shadow-[0_2px_10px] shadow-blackA4 gap-15 ">
        <NavigationMenu.Item>
          <Link href="/" className="text-white hover:text-purple-300 font-bold">
            Cushon Home
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item
          className="text-white hover:text-purple-300 font-bold"
          onClick={() =>
            window.alert("This is just here to fit my balanced concept...")
          }
        >
          Workplace
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link
            href="/direct"
            className="text-white hover:text-purple-300 font-bold"
          >
            For Home
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavBar;
