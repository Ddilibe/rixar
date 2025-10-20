import Project6 from "@/assets/projects/omoniyi-david-syuGbgVO_2U-unsplash.jpg";

type OverLayCardsProps = {
    position: string;
    name: string;
    description: string;
    bgImage: string;
};

type TeamCardsProp = {
    image: string;
    name: string;
    position: string;
    first: string;
    second: string;
}

const { expertTitle, expertDescription } = { expertTitle: "Expert Team", expertDescription: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consecadipisicing elit, sed do eiusmod tempor incididunt.ers. Legal experts. All dedicated to applying their decades of experience to solving our clients’ unique challenges." };
const { leadTitle, leadDescription } = { leadTitle: "Leadership", leadDescription: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consecadipisicing elit, sed do eiusmod tempor incididunt.ers. Legal experts. All dedicated to applying their decades of experience to solving our clients’ unique challenges." };

const LeaderShipCards: OverLayCardsProps[] = [
    { bgImage: Project6, name: "B. Zimmerman", position: "Executive Vice President", description: "Andrew B. Zimmerman is the founder, has over 28 years of executive leadership experience." },
    { bgImage: Project6, name: "B. Zimmerman", position: "Executive Vice President", description: "Andrew B. Zimmerman is the founder, has over 28 years of executive leadership experience." },
    { bgImage: Project6, name: "B. Zimmerman", position: "Executive Vice President", description: "Andrew B. Zimmerman is the founder, has over 28 years of executive leadership experience." },
    { bgImage: Project6, name: "B. Zimmerman", position: "Executive Vice President", description: "Andrew B. Zimmerman is the founder, has over 28 years of executive leadership experience." },
];

const ExpertTeamCards: TeamCardsProp[] = [
    { image: Project6, name: "Henry Smith", position: "General Manager", "first": "Deleniti dicta inventore, ducimus, laudantium sint molestias est esse nihil facilis labore similique voluptatibus dolore hic.", second: "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been . Lorem Ipsum has been." },
    { image: Project6, name: "Henry Smith", position: "General Manager", "first": "Deleniti dicta inventore, ducimus, laudantium sint molestias est esse nihil facilis labore similique voluptatibus dolore hic.", second: "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been . Lorem Ipsum has been." },
    { image: Project6, name: "Henry Smith", position: "General Manager", "first": "Deleniti dicta inventore, ducimus, laudantium sint molestias est esse nihil facilis labore similique voluptatibus dolore hic.", second: "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been . Lorem Ipsum has been." },
    { image: Project6, name: "Henry Smith", position: "General Manager", "first": "Deleniti dicta inventore, ducimus, laudantium sint molestias est esse nihil facilis labore similique voluptatibus dolore hic.", second: "Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum has been . Lorem Ipsum has been." },
]

export {
    expertTitle,
    expertDescription,
    leadDescription,
    leadTitle,
    LeaderShipCards,
    ExpertTeamCards,
    type OverLayCardsProps,
    type TeamCardsProp,
}