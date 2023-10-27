import Logo from "./Logo"
import { DarkModeToogle } from "./DarkModeToogle"
import UserButton from "./UserButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/auth"
import Link from "next/link"
import { MessagesSquareIcon } from "lucide-react"
import CreateChatButton from "./CreateChatButton"

const Header = async () => {

	const session = await getServerSession(authOptions)
	console.log(session);

	return (
		<header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
			<nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
				<Logo />

				<div className="flex flex-1 items-center justify-end space-x-4">
					{/* Language select */}

					{session ?
						// if logged in, show the MessagesSquareIcon button and CreateChatButton
						(
							<>
								<Link href="/chat" prefetch={false}>
									<MessagesSquareIcon className="text-black dark:text-white" />
								</Link>
								<CreateChatButton />
							</>
						) :
						// If not logged in, show the Pricing button
						(
							<Link href="/pricing">
								Pricing
							</Link>
						)}

					{/* Dark Mode Button */}
					<DarkModeToogle />

					{/* User Button */}
					<UserButton session={session} />
				</div>
			</nav>

			{/* Upgrade Banner */}
		</header>
	)
}

export default Header