export interface TeamMember {
  name: string;
  designation: string;
  src: string;
  quote?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Mikki Aalto-Ylevä",
    designation: "Founder",
    src: "/images/team/Mikki.jpeg",
    quote: "Great things happen when you combine passion with purpose."
  },
  {
    name: "Tuomas Kaartoluoma", 
    designation: "Fullstack Designer",
    src: "/images/team/Tuomas.png",
    quote: "Design is not just what it looks like - design is how it works."
  },
  {
    name: "Duncan",
    designation: "Designer", 
    src: "/images/team/Duncan.jpeg",
    quote: "Creativity is intelligence having fun."
  },
  {
    name: "Aksel Suokas",
    designation: "UX Designer",
    src: "/images/team/Aksel.jpeg", 
    quote: "The best user experiences are invisible to the user."
  }
] 