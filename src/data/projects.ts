export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "CollegePredict360",
    description:
      "Built a full-stack college prediction platform with Razorpay payment, backend APIs, and domain hosting for predicting the collages based on the Eamcet rank.",
    image: "/collagepredict-img.png?height=300&width=400",
    category: "Web App",
    techStack: ["Next.js", "TypeScript", "vite", "Razorpay", "Render","Node.js"],
    liveUrl: "https://mycollegepredictor.in",
    githubUrl: "https://github.com/AbhishekAdiga/collegeprediction360",
  },
  {
    id: "2",
    title: "AI-Finance Management Platform",
    description:
      "An intelligent financial management platform that helps you monitor, analyze and optimize your spending with real time AI-Powered insights though email notifications .",
    image: "/finance-img.png?height=300&width=400",
    category: "AI/ML",
    techStack: ["React", "Node.js", "GeminiAI API", "Supabase", "Tailwind CSS","shadcn/ui"],
    liveUrl: "https://capital-finance-3g10nrl8x-abhishek-adigas-projects.vercel.app/",
    githubUrl: "https://github.com/AbhishekAdiga/capital-finance",
  },
  {
    id: "3",
    title: "Real-Time Chat Application",
    description:
      "Scalable chat application with real-time messaging, text-based chatbot with LLM responses and speech synthesis..",
    image: "/chatbot-img.png?height=300&width=400",
    category: "AI/ML",
    techStack: ["Google Colab", "OpenAI", "PlayHT", "LangChain", "Gradio"],
    liveUrl: "https://abhichatbottext.ccbp.tech",
    githubUrl: "https://huggingface.co/spaces/abhishekadiga/GenAIChatBot",
  },
  {
    id: "4",
    title: "Handling API's",
    description:
      "Given two files app.js and a database file cricketTeam.db consisting a table cricket_team, Written APIs to perform operations on the table cricket_team containing the Specified reqirements (Check out Readme)",
    image: "/api-img.png?height=300&width=400",
    category: "API",
    techStack: ["Js","Database","API","Express.js","Node.js","SQLite"],
    githubUrl: "https://github.com/AbhishekAdiga/Cricket-Team-API-S",
  },
  {
    id: "5",
    title: "RealMart Business Dashboard",
    description:
      "Developed a full-stack-compatible analytics dashboard for “RealMart” – an imaginary retail dataset using Power BI.Integrated KPI indicators, bar graphs, donut charts, tree maps, area charts, and geo-maps to enable data-driven decisions.Improved simulated business opportunities by 30% through insightful trend analysis and customer segmentation strategies.",
    image: "/analytics-img.png?height=300&width=400",
    category: "Analytics",
    techStack: ["Microsoft Power BI","Microsoft Excel","Kaggle","Data Analytics","Data Modeling","Data Visualization"],
    liveUrl: "https://drive.google.com/file/d/1IFx8xG3EyB_oz7NSFKBWTSFFErfFb8h4/view?usp=sharing",
  },
  {
    id: "6",
    title: "Portfolio Website",
    description:
      "The website you are looking into is developed with Prompt engg using v0. It is a fully responsive portfolio website showcasing my skills, projects, and achievements. ",
    image: "/portfolio-img.png?height=300&width=400",
    category: "Web App",
    techStack: ["Prompt Engg", "v0", "React", "Swizz Design", "Vercel"],
    githubUrl: "https://github.com/AbhishekAdiga/portfolio",
  },
  {
    id: "7",
    title: "Task Management App",
    description:
      "A simple task management application that allows users to create, update, and delete tasks. It uses local storage for data persistence and features a clean, responsive design.",
    image: "/tasktracker-img.png?height=300&width=400",
    category: "Web App",
    techStack: ["React", "Node.js", "HTML5", "Local Storage", "Tailwind CSS","shadcn/ui","Vercel"],
    liveUrl: "https://tasktracker-lemon.vercel.app/",
    githubUrl: "https://github.com/AbhishekAdiga/tasktrackerapp",
  },
  {
    id: "8",
    title: "Country Search Engine",
    description:
      "A web application that allows users to search for countries by name and view details such as population. It uses the REST Countries API for data retrieval.",
    image: "/countrysearch-img.png?height=300&width=400",
    category: "Web App",
    techStack: ["Front_end", "DBMS", "HTML5", "Search Engine"],
    liveUrl: "https://abhishekcountry.ccbp.tech/",
  },
]
