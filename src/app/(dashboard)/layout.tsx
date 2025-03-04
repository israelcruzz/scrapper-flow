import React from "react";
import { DesktopMenu } from "../components/dashboard/shared/menu";

type Props = {
	children: React.ReactNode
}

export default async function Layout(props: Props) {
	const {
		children
	} = props;

	return (
		<main className="flex bg-[#0A0A0A]">
			<section>
				<DesktopMenu />
			</section>
			<section>
				{children}
			</section>
		</main>
	)
}