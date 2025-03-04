import { Banknote, Home, LucideIcon, Workflow } from "lucide-react";

type Menu = {
	to: string;
	label: string;
	icon: LucideIcon
}

const MENU_ITEMS: Menu[] = [
	{
		to: "",
		label: "Dashboard",
		icon: Home
	},
	{
		to: "/zdda",
		label: "Financeiro",
		icon: Banknote
	},
	{
		to: "/workflows",
		label: "Workflows",
		icon: Workflow
	}
]

export const useMenu = () => MENU_ITEMS;