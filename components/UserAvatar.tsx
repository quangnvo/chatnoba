import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

interface UserAvatarProps {
    name?: string | null
    image?: string | null
    className?: string
}

const UserAvatar = ({ name, image, className }: UserAvatarProps) => {
    return (
        <Avatar className={cn("bg-white text-black", className)}>
            {image && (
                <Image
                    src={image}
                    alt={name || "User name"}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            )}

            {/* This part is to create the name, for example: "John Doe" will be "JD" */}
            <AvatarFallback
                className="dark:bg-white dark:text-black text-lg"
                delayMs={1000}
            >
                {name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                }
            </AvatarFallback>
        </Avatar>
    )
}

export default UserAvatar