import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/user/default";
import NFTMarketplace from "views/user/marketplace";
import Profile from "views/user/profile";
import DataTables from "views/user/dataTables";
import Deposit from "views/user/deposit"
import Transaction from "views/user/transaction"
import Loan from "views/user/loan"
// import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUp from "views/auth/signUp";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Transfer",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/transfer",
    component: Deposit,
  },
  {
    name: "Transaction History",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/transaction-history",
    component: Transaction,
  },
  {
    name: "Stock Investment",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/investment",
    component: DataTables,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
        <Icon
            as={MdOutlineShoppingCart}
            width='20px'
            height='20px'
            color='inherit'
        />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Quick Loan",
    layout: "/admin",
    path: "/loan",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Loan,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "/sign-up",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignUp,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
];

export default routes;
