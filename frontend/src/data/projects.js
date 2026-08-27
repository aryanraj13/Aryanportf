export const projects = [
  {
  id: "ai-assistant",
  number: "06",
  name: "AI Assistant",
  tagline: "Agentic Email Assistant with LangGraph",
  category: ["Agentic AI", "LangGraph"],
  icon: "brain",

  description:
    "An agentic email assistant built from scratch with LangGraph that combines email triage, tool-calling, evaluation, human-in-the-loop workflows, persistent memory, and Gmail integration.",

  tech: [
    "Python",
    "LangGraph",
    "LangChain",
    "OpenAI",
    "LangSmith",
    "Gmail API",
  ],

  features: [
    "Email Triage",
    "Tool Calling",
    "Human-in-the-Loop",
    "Agent Memory",
    "LLM Evaluation",
    "Gmail Integration",
    "LangGraph Workflows",
  ],

  github: "https://github.com/aryanraj13/AI-Assistant",
  liveUrl: null,

  image: "/ai-assistant.png",

  media: [
    {
      src: "/ai-assistant.png",
      desc:
        "The project builds an ambient email agent that can reason over email tasks and progressively connect those capabilities into a deployable assistant.",
    },

    {
      src: "/ai-assistant-evaluation.png",
      desc:
        "The core agent combines email triage with an agent that can handle responses and tool-based actions through a LangGraph workflow.",
    },

    {
      src: "/ai-assistant-hitl.png",
      desc:
        "The evaluation workflow uses an email dataset and LangSmith to assess response quality, tool usage, and triage decisions with automated evaluation.",
    },

    {
      src: "/ai-assistant-agent.png",
      desc:
        "Human-in-the-loop workflows allow users to review sensitive tool calls, such as sending emails or scheduling meetings, before execution.",
    },

    {
      src: "/ai-assistant-memory.png",
      desc:
        "The memory-enabled version uses LangGraph Store to persist user preferences and feedback, allowing the assistant to adapt over time.",
    },
  ],
},
  {
    id: "personal-brain",
    number: "01",
    name: "Personal Brain",
    tagline: "AI Powered Cross-Source Assistant",
    category: ["Agentic AI", "RAG"],
    icon: "brain",

    description:
      "A conversational AI assistant that retrieves and reasons over personal data from Gmail and Google Drive using a unified knowledge layer powered by GBrain.",

    tech: [
      "Next.js",
      "AI Agent",
      "RAG",
      "GBrain",
      "Google Gemini",
    ],

    features: [
      "Gmail Integration",
      "Google Drive Integration",
      "Hybrid Retrieval",
      "Cross-Source Reasoning",
      "Context-Aware Responses",
    ],

    github: "https://github.com/aryanraj13/brian2",
    liveUrl: "https://personalbrain-sooty.vercel.app/",

    image: "/personalbrain.png",

    media: [
      {
        src: "/personalbrain.png",
        desc:
          "Personal Brain provides a conversational AI interface for interacting with personal knowledge. Users can ask natural-language questions and receive context-aware responses generated from connected sources.",
      },
      {
        src: "/chat1p.png",
        desc:
          "The chat interface enables users to query their connected knowledge base using natural language. Retrieved information is processed and passed to Gemini to generate relevant, context-aware answers.",
      },
      {
        src: "/chat2p.png",
        desc:
          "The retrieval layer combines connected data sources into a unified knowledge workflow. Relevant context is retrieved before generation, improving the accuracy and relevance of responses to user queries.",
      },
    ],
  },

  {
    id: "expense-tracker",
    number: "02",
    name: "Expense Tracker",
    tagline: "Secure Finance Management API",
    category: ["Backend", "Finance"],
    icon: "wallet",

    description:
      "A RESTful expense tracking API built with Go and PostgreSQL, featuring secure JWT authentication, protected CRUD operations, and category-wise expense analytics.",

    tech: [
      "Go",
      "PostgreSQL",
      "JWT",
      "Gorilla Mux",
      "Bcrypt",
    ],

    features: [
      "JWT Authentication",
      "Protected CRUD APIs",
      "Expense Management",
      "Category Analytics",
      "PostgreSQL Integration",
    ],

    github: "https://github.com/aryanraj13/ExpenseFrontend",
    liveUrl: "https://expensetrackergo.netlify.app/",

    image: "/gotrack.png",

    media: [
      {
        src: "/gotrack-dashboard.png",
        desc:
          "GoTrack provides a powerful financial dashboard with real-time income, expense, balance, and transaction analytics. Interactive charts and modern UI components help users monitor financial activity effortlessly.",
      },
      {
        src: "/gotrack-transactions.png",
        desc:
          "Users can add, filter, search, and manage transactions with an elegant transaction management system. Real-time updates ensure smooth financial tracking and organization.",
      },
      {
        src: "/gotrack-login.png",
        desc:
          "GoTrack features a professional authentication system with beautifully designed login and registration pages. The modern split-screen layout, premium dark theme, and responsive design create a polished fintech experience for users.",
      },
      {
        src: "/gotrack-analytics.png",
        desc:
          "Advanced analytics visualize monthly spending trends and category breakdowns through dynamic charts and insights. Users can easily understand spending behavior and financial patterns.",
      },
      {
        src: "/gotrack-accounts.png",
        desc:
          "The accounts module allows users to manage multiple wallets, bank accounts, and credit cards in one place. Each account card displays balances with a clean and modern design.",
      },
      {
        src: "/gotrack-categories.png",
        desc:
          "GoTrack supports custom financial categories with color-coded organization and emoji support. This makes budgeting and expense classification intuitive and visually engaging.",
      },
      {
        src: "/gotrack-settings.png",
        desc:
          "The settings section enables profile management, account preferences, and secure logout functionality. The responsive UI ensures a smooth experience across all devices.",
      },
    ],
  },

  {
    id: "votechain",
    number: "03",
    name: "VoteChain",
    tagline: "Decentralized Voting System",
    category: ["Blockchain", "Web3"],
    icon: "vote",

    description:
      "A blockchain-based voting platform enabling secure, transparent, and tamper-proof elections using Ethereum smart contracts.",

    tech: [
      "React",
      "Web3.js",
      "Solidity",
      "Ethereum",
      "Ganache",
      "Truffle",
      "MetaMask",
    ],

    features: [
      "Ethereum Smart Contracts",
      "Admin Election Management",
      "Voter Verification",
      "MetaMask Integration",
      "Immutable Vote Storage",
      "Transparent Results",
    ],

    github:
      "https://github.com/aryanraj13/VoteChain-Decentralised-Voting-System",

    liveUrl: null,

    image: "/Screenshot 2026-04-21 230235.png",

    media: [
      {
        src: "/1.png",
        desc:
          "VoteChain uses Solidity smart contracts deployed on Ethereum to manage election workflows securely. Votes, candidates, and voter records are stored immutably on-chain, ensuring transparency and trust.",
      },

      {
        src: "/2.png",
        desc:
          "The admin dashboard allows election setup, candidate creation, voter verification, and election lifecycle management. Smart contract access control ensures that only authorized administrators can manage critical election operations.",
      },

      {
        src: "/3.png",
        desc:
          "Voters connect their MetaMask wallets to register and participate in elections securely. Each transaction is cryptographically signed, helping prevent unauthorized voting and ensuring voter authenticity.",
      },

      {
        src: "/4.png",
        desc:
          "The frontend is built using React and Web3.js, enabling seamless interaction between users and the Ethereum blockchain. Blockchain data is fetched dynamically for voting and result updates.",
      },

      {
        src: "/5.png",
        desc:
          "Ganache provides a local Ethereum blockchain environment for testing and deployment, while Truffle handles smart contract compilation, migration, and development workflow automation.",
      },

      {
        src: "/6.png",
        desc:
          "The results module retrieves vote counts directly from the blockchain and displays election outcomes transparently. Immutable vote storage makes result manipulation extremely difficult.",
      },
    ],
  },

  {
    id: "marketmentor",
    number: "03",
    name: "MarketMentor",
    tagline: "GROQ Powered Stock Market Bot",
    category: ["Generative AI", "FinTech"],
    icon: "chart",

    description:
      "A responsive stock market platform providing real-time insights, heatmaps, trending stocks, interactive financial dashboards, and AI-powered stock querying using GroqCloud.",

    tech: [
      "Next.js",
      "TypeScript",
      "GroqCloud API",
      "TradingView",
      "Tailwind CSS",
    ],

    features: [
      "AI Stock Querying",
      "Real-Time Market Insights",
      "Interactive Dashboards",
      "Stock Heatmaps",
      "Financial Data Visualization",
    ],

    github: "https://github.com/aryanraj13/MarketMentor",
    liveUrl: "https://marketmentor.netlify.app/",

    image: "/marketmentor.png",

    media: [
      {
        src: "/frontmarket.png",
        desc:
          "MarketMentor leverages the Llama3-70b model for natural language understanding. It delivers intelligent, real-time answers to user financial queries, while Groq backend acceleration enables fast AI response times.",
      },
      {
        src: "/front1.png",
        desc:
          "Integrated TradingView widgets show real-time charts and metrics. Users can explore stock prices, heatmaps, screeners, and news. The visual data updates instantly based on chat inputs.",
      },
      {
        src: "/front2.png",
        desc:
          "The frontend is built using React and Next.js for seamless performance. Server-side rendering enables faster load times and dynamic updates for a smooth, responsive chat and charting experience.",
      },
      {
        src: "/front3.png",
        desc:
          "Next.js API routes connect user input with AI and financial APIs. Queries are processed and enriched with real-time stock data to deliver accurate and relevant financial insights.",
      },
      {
        src: "/front4.png",
        desc:
          "Styled with Tailwind CSS for a mobile-friendly, elegant layout. Each UI component adapts across screen sizes while maintaining a consistent and intuitive user experience.",
      },
      {
        src: "/front5.png",
        desc:
          "The interface updates in real-time based on user queries. Charts, financials, and AI responses appear contextually, creating a personalized and interactive user experience.",
      },
    ],
  },

  {
    id: "boxzone",
    number: "04",
    name: "BoxZone",
    tagline: "Full-Stack Ecommerce Platform",
    category: ["Full Stack", "Ecommerce"],
    icon: "shopping-cart",

    description:
      "A full-stack e-commerce platform with authentication, cart management, order workflows, secure product management, and scalable API workflows.",

    tech: [
      "React.js",
      "MongoDB",
      "Next.js",
      "JWT",
    ],

    features: [
      "JWT Authentication",
      "Shopping Cart",
      "Order Management",
      "Product Management",
      "Scalable API Workflows",
    ],

    github: "https://github.com/aryanraj13/BoxZone-Ecommerce",
    liveUrl: "https://boxzone.netlify.app/",

    image: "/ecom1.png",

    media: [
      {
        src: "/ecom1.png",
        desc:
          "BoxZone is a modern e-commerce site built using Next.js and MongoDB. JWT-based authentication secures user sessions and access control while providing a reliable shopping experience.",
      },
      {
        src: "/ecom2.png",
        desc:
          "The application uses server-side rendering through Next.js for improved SEO and performance. MongoDB provides a scalable and flexible backend for managing application data.",
      },
      {
        src: "/ecom3.png",
        desc:
          "The platform includes AI modules for anomaly detection and fraud prevention. User behavior is analyzed to identify suspicious activities and reduce the risk of payment manipulation.",
      },
      {
        src: "/ecom4.png",
        desc:
          "Role-based access control supports users and administrators. JWT tokens secure API access and middleware protects routes that require authentication.",
      },
      {
        src: "/ecom5.png",
        desc:
          "Cart, order placement, and checkout flows are fully implemented. Sensitive user and order data are securely managed, with payment gateway integration supporting online payments.",
      },
      {
        src: "/ecom6.png",
        desc:
          "The platform is designed for a smooth shopping experience across screen sizes. Next.js optimizations improve page transitions and loading performance.",
      },
      {
        src: "/ecom7.png",
        desc:
          "The project follows a clean MVC structure with modular APIs and models. Separate components handle users, products, and orders to simplify maintenance and future feature additions.",
      },
    ],
  },
];