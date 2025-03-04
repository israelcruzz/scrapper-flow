"use client"

import { useMenu } from "@/app/hooks/useMenu";
import { Bot, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DesktopMenu = () => {
	const menuItems = useMenu();
	const pathname = usePathname();

	return (
		<menu className="flex flex-col gap-6 bg-gradient-to-b from-[#111111] to-black p-6 h-screen overflow-hidden min-w-[266px] border-r border-[#1F1F22]">
			<header className="flex items-center gap-3">
				<Bot size={42} color="#C8BCF6" />
				<h2 className="font-black text-xl">
					Scrapper <br />
					Flow
				</h2>
			</header>

			<search>
				<div className="w-full flex gap-2 p-4 rounded-2xl bg-[#1F1F22]">
					<Search />
					<input type="search" placeholder="Pesquisar..." className="bg-transparent outline-none" />
				</div>
			</search>

			<nav className="flex flex-col gap-3">
				{
					menuItems.map((item) => {
						return (
							<Link key={item.label} href={item.to} className={`flex w-full py-3 px-4 rounded-2xl gap-4 ${pathname === item.to && 'bg-purple-800'}`}>
								<item.icon size={24} color="#C8BCF6" />
								<span className="font-medium text-base text-white">{item.label}</span>
							</Link>
						)
					})
				}
			</nav>
		</menu>
	)
}