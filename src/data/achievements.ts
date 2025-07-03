export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  organization?: string
}

export const achievementsData: Achievement[] = [
  {
    id: "1",
    title: "Bachelor of Technology in Computer Science",
    description:
      "Completed my graduation in B.Tech CSE with First Class Distiontion.",
    date: "2025",
    organization: "Anurag University",
  },
  {
    id: "2",
    title: "Freelance/Part time",
    description: "Worked as a freelance/part time developer, building web applications and automating tasks using Full Stack.",
    date: "2025",
    organization: "TechM4India",
  },
  {
    id: "3",
    title: "Open Source Contributor - Internship",
    description: "Thrilled to share that I have successfully completed my 1-month AICTE OIB-SIP internship in Python Programming with Oasis Infobyte. ",
    date: "2025",
    organization: "Oasis Infobyte",
  },
  {
    id: "4",
    title: "National Level Hackathon",
    description: "It was a Cybersecurity Hackathon, Competed with 1000 participents got into top 100.",
    date: "2024",
    organization: "DSCI-EY( New Delhi )",
  },
  {
    id: "5",
    title: "Teching Assistant",
    description: "Teaching mentor at NxtWave, Making students at Nxtwave to solve their doubts on Node.js sessions and coading practices. provide a path to solve the problems like how you can solve it.",
    date: "2024",
    organization: "NxtWave",
  },
]
