import Link from "next/link"
import Image from "next/image"
import { AspectRatio } from "./ui/aspect-ratio"
import LogoImage from "@logos/black.svg"

const Logo = () => {
	return (
		<Link
			href="/"
			prefetch={false}
			className="overflow-hidden"
		>
			<div className="flex items-center w-72 h-14">
				<AspectRatio
					ratio={16 / 9}
					className="flex items-center justify-center"
				>
					<Image
						priority
						src={LogoImage}
						alt="logo"
						className="dark:filter dark:invert"
						width={60}
						height={14}
					/>
				</AspectRatio>
			</div>
		</Link>
	)
}

export default Logo