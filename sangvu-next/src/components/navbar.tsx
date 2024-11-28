'use client';

import { useState } from 'react';
import Link from 'next/link';
import MoreComponentDrawer from './Sang/MoreComponentDrawer';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = (isOpen: boolean) => () => {
    setDrawerOpen(isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="text-2xl font-semibold dark:text-white">SAN</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Trang chủ
            </Link>
            <Link href="/about" className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Project
            </Link>
            <Link href="/services" className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Skill
            </Link>
            <Link href="/contact" className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
              Contact
            </Link>
          </div>

          <button
            className="more-sang text-gray-900 dark:text-white px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            onClick={toggleDrawer(true)}
          >
            Sang
          </button>
        </div>
      </div>

      {/* Drawer Component */}
      <MoreComponentDrawer open={drawerOpen} onClose={toggleDrawer(false)} />
    </nav>
  );
};

export default Navbar;
