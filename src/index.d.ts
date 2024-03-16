declare module "react-components-test-package-master" {
  import React from "react";
  interface LoaderProps {
    logo: string;
  }

  interface NavbarProps {
    logo: string;
    navItems: { id: number; to: string; title: string }[];
  }

  const Loader: React.FC<LoaderProps>;
  const Navbar: React.FC<NavbarProps>;

  export { Loader, Navbar };
}