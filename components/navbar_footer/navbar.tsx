import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <div>
      <div className="bg-lightBrown h-10"></div>
      <NavigationMenu className=" flex items-center justify-center ">
        <NavigationMenuList className="bg-white w-[90vw] flex items-center justify-between px-20 rounded-b-2xl">
          <div className="flex items-center justify-around">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
          <NavigationMenuItem>
            <Image src={"/anjumLogo.png"} width={100} height={100} alt="" />
          </NavigationMenuItem>
          <div className="flex items-center justify-around gap-10">
            <Input placeholder="Search here..." className="rounded-full h-8" />
            <NavigationMenuItem>
              <ShoppingCart className="h-5 w-5" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <User className="h-5 w-5" />
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
