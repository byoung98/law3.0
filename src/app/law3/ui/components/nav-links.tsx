'use client';
import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

const links = [
  { name: 'About', href: '/', icon: HomeIcon  },
  { name: 'Home', href: '/law3/home', icon: TableCellsIcon},
  { name: 'Account', href: '/law3/account', icon: UserCircleIcon},
];

export default async function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center gap-2 rounded-md bg-white-50 p-3 text-sm font-medium hover:bg-red-100 md:flex-none md:justify-start md:p-2 md:px-3">
        
           
            <LinkIcon className="w-6" />
            <p className="hidden md:block ">{link.name}</p>
          </Link>
        );
      })}

    </>
  );
}