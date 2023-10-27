const tiers = [
    {
        name: 'Starter',
        id: null,
        href: '#',
        priceMonthly: null,
        description: "Get chatting right away with anyone, anywhere!",
        features: [
            "20 Message limit in Chats",
            "2 Participants limit in Chats",
            "3 Chat Room limit",
            "Supports 2 languages",
            "48-hour support response time"
        ]
    },
    {
        name: 'Pro',
        id: "si_0nlcsLNQYbMVzV",
        href: "#",
        priceMonthly: "$4.99",
        description: "Unlock the Full Potential with Pro!",
        features: [
            "Unlimited Message limit in Chats",
            "Unlimited Participants limit in Chats",
            "Unlimited Chat Room limit",
            "Supports up to 10 languages",
            "Multimedia support in chats (coming soon)",
            "1-hour, dedicated support response time",
            "Early access to new features"
        ]
    }
]

const PricingCards = ({ redirect }: { redirect: boolean }) => {
    return (
        <div>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier) => (
                    <div
                        key={tier.id}
                        className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                    >

                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingCards