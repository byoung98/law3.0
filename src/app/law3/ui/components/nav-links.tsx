"use client";
import { signOut, useSession } from "next-auth/react";
import {
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback } from "react";

interface LinkData {
  name: string;
  href: string;
  type: "link" | "signOut";
  requiresSessionState?: "authenticated" | "unauthenticated" | "any";
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const links: LinkData[] = [
  {
    name: "Welcome Page",
    href: "/",
    type: "link",
    requiresSessionState: "unauthenticated",
    icon: HomeIcon,
  },
  {
    name: "Sign Out",
    href: "/",
    type: "signOut",
    requiresSessionState: "authenticated",
    icon: ArrowLeftStartOnRectangleIcon,
  },
  {
    name: "NDAs",
    href: "/law3",
    type: "link",
    requiresSessionState: "any",
    icon: TableCellsIcon,
  },
  {
    name: "User Info",
    href: "/law3/userInfo",
    type: "link",
    requiresSessionState: "any",
    icon: UserCircleIcon,
  },
];

function NavLinksContent() {
  const session = useSession();
  const filteredLinks = links.filter((link) => {
    if (link.requiresSessionState === "any" || !link.requiresSessionState) {
      return true;
    }
    if (link.requiresSessionState === "authenticated") {
      return !!session;
    }
    if (link.requiresSessionState === "unauthenticated") {
      return !session;
    }
    return false;
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const handleSignOut = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      await signOut({
        callbackUrl: callbackUrl || "/",
        redirect: true,
      });
    },
    [callbackUrl]
  );

  return (
    <>
      {filteredLinks.map((link, index) => {
        const LinkIcon = link.icon;

        if (link.type === "signOut") {
          return (
            <button
              key={link.name}
              onClick={handleSignOut}
              className="flex h-[48px] grow items-center gap-2 rounded-md bg-white-50 p-3 text-sm font-medium hover:bg-red-100 md:flex-none md:justify-start md:p-2 md:px-3"
              type="button"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block ">{link.name}</p>
            </button>
          );
        }

        if (link.type === "link") {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center gap-2 rounded-md bg-white-50 p-3 text-sm font-medium hover:bg-red-100 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block ">{link.name}</p>
            </Link>
          );
        }

        return <p key={`unhandled-${index}`}>Unhandled link type</p>;
      })}
    </>
  );
}

export default function NavLinks() {
  return (
    <Suspense fallback={<div>Loading navigation...</div>}>
      <NavLinksContent />
    </Suspense>
  );
}