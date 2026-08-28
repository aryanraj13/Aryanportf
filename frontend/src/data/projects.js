export const projects = [
  {
    id: "ai-assistant",
    number: "01",
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

    architecture: {
      title: "How the AI Assistant works",

      description:
        "An agentic email workflow where user requests are interpreted by an AI agent, routed through LangGraph, connected to Gmail tools, evaluated through LangSmith, and paused for human approval when sensitive actions require confirmation.",

      nodes: [
        {
          id: "user",
          name: "User",
          type: "Input",
          icon: "user",
          layer: "top",
          description:
            "The user interacts with the assistant using natural-language requests such as reading emails, drafting replies, searching messages, or performing email-related actions.",
        },

        {
          id: "agent",
          name: "AI Agent",
          type: "Agent",
          icon: "ai",
          layer: "middle",
          description:
            "The AI agent interprets the user's request, reasons about the required steps, selects tools, and coordinates the task through the LangGraph workflow.",
        },

        {
          id: "triage",
          name: "Email Triage",
          type: "AI Capability",
          icon: "ai",
          layer: "bottom",
          description:
            "Incoming emails can be categorized and prioritized so the agent can determine which messages require attention or further action.",
        },

        {
          id: "gmail",
          name: "Gmail API",
          type: "Tool",
          icon: "gmail",
          layer: "bottom",
          description:
            "The Gmail API connects the agent to email operations including reading, searching, drafting, and other approved email actions.",
        },

        {
          id: "hitl",
          name: "Human-in-the-Loop",
          type: "Safety Layer",
          icon: "user",
          layer: "bottom",
          description:
            "Sensitive operations can pause the workflow and request human approval before the action is executed.",
        },

        {
          id: "memory",
          name: "Agent Memory",
          type: "Persistent State",
          icon: "database",
          layer: "bottom",
          description:
            "The memory system stores useful user preferences and feedback so the assistant can maintain context and adapt across interactions.",
        },
      ],

      connections: [
        {
          from: "user",
          to: "agent",
          label: "request",
        },

        {
          from: "agent",
          to: "gmail",
          label: "tool call",
        },
      ],

      final: {
        id: "langgraph",
        name: "LangGraph",
        type: "Orchestration",
        icon: "ai",
        description:
          "LangGraph manages the stateful agent workflow, coordinating reasoning, tool calls, memory, human approval, and execution across the assistant.",
      },

      finalLabel: "state + workflow",
    },

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
    number: "02",
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

    architecture: {
      title: "How Personal Brain works",

      description:
        "A cross-source RAG architecture that connects Gmail and Google Drive to a unified retrieval layer, allowing an AI agent to gather relevant personal context before Gemini generates the final response.",

      nodes: [
        {
          id: "user",
          name: "User",
          type: "Input",
          icon: "user",
          layer: "top",
          description:
            "The user asks questions about their personal information using natural language.",
        },

        {
          id: "nextjs",
          name: "Next.js App",
          type: "Frontend",
          icon: "code",
          layer: "middle",
          description:
            "The Next.js application provides the conversational interface and handles communication between the user and the AI system.",
        },

        {
          id: "agent",
          name: "AI Agent",
          type: "Agent Layer",
          icon: "ai",
          layer: "bottom",
          description:
            "The AI agent interprets the user's question and determines what information needs to be retrieved before generating a response.",
        },

        {
          id: "gmail",
          name: "Gmail",
          type: "Data Source",
          icon: "gmail",
          layer: "bottom",
          description:
            "Gmail provides personal email information that can be retrieved as relevant context for user queries.",
        },

        {
          id: "drive",
          name: "Google Drive",
          type: "Data Source",
          icon: "drive",
          layer: "bottom",
          description:
            "Google Drive provides personal documents and files that can be searched and retrieved as part of the knowledge workflow.",
        },

        {
          id: "retrieval",
          name: "Hybrid Retrieval",
          type: "RAG Layer",
          icon: "retrieval",
          layer: "bottom",
          description:
            "The retrieval layer searches across connected sources and combines relevant information into a unified context.",
        },

      ],

      connections: [
        {
          from: "user",
          to: "nextjs",
          label: "question",
        },

        {
          from: "nextjs",
          to: "agent",
          label: "query",
        },

        {
          from: "agent",
          to: "retrieval",
          label: "retrieve",
        },
      ],

      final: {
        id: "gemini",
        name: "Google Gemini",
        type: "LLM",
        icon: "llm",
        description:
          "Gemini receives the original user query together with retrieved context and generates the final context-aware response.",
      },

      finalLabel: "context + prompt",
    },

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
    number: "03",
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

    architecture: {
      title: "How GoTrack works",

      description:
        "A secure full-stack finance architecture where the frontend communicates with a Go REST API, authenticated requests are validated using JWT, and financial data is persisted in PostgreSQL.",

      nodes: [
        {
          id: "user",
          name: "User",
          type: "Client",
          icon: "user",
          layer: "top",
          description:
            "Users interact with the application to manage expenses, accounts, categories, and financial information.",
        },

        {
          id: "frontend",
          name: "Web App",
          type: "Frontend",
          icon: "code",
          layer: "middle",
          description:
            "The frontend provides the dashboard, transaction management, analytics, accounts, settings, and authentication interfaces.",
        },

        {
          id: "auth",
          name: "JWT Authentication",
          type: "Security",
          icon: "user",
          layer: "bottom",
          description:
            "JWT authentication protects API endpoints and ensures that users can only access authorized financial resources.",
        },

        {
          id: "api",
          name: "Go REST API",
          type: "Backend",
          icon: "code",
          layer: "bottom",
          description:
            "The Go backend exposes RESTful endpoints for users, expenses, categories, accounts, and other finance operations.",
        },

        {
          id: "services",
          name: "Expense Services",
          type: "Business Logic",
          icon: "code",
          layer: "bottom",
          description:
            "Application logic processes transactions, categories, account operations, and financial calculations before interacting with the database.",
        },

        {
          id: "postgres",
          name: "PostgreSQL",
          type: "Database",
          icon: "database",
          layer: "bottom",
          description:
            "PostgreSQL stores authenticated users and financial application data in a structured relational database.",
        },
      ],

      connections: [
        {
          from: "user",
          to: "frontend",
          label: "interaction",
        },

        {
          from: "frontend",
          to: "api",
          label: "HTTP / REST",
        },

        {
          from: "api",
          to: "postgres",
          label: "queries",
        },
      ],

      final: {
        id: "analytics",
        name: "Financial Analytics",
        type: "Insights",
        icon: "chart",
        description:
          "Stored transaction data is aggregated into financial summaries, category breakdowns, balances, and spending analytics displayed through the application.",
      },

      finalLabel: "data → insights",
    },

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
    number: "04",
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

    architecture: {
      title: "How VoteChain works",

      description:
        "A decentralized voting architecture where users interact with an Ethereum smart contract through a React application and MetaMask, while blockchain transactions provide transparent and immutable vote storage.",

      nodes: [
        {
          id: "voter",
          name: "Voter / Admin",
          type: "User",
          icon: "user",
          layer: "top",
          description:
            "Voters participate in elections while administrators manage candidates, voters, and election configuration.",
        },

        {
          id: "react",
          name: "React App",
          type: "Frontend",
          icon: "code",
          layer: "middle",
          description:
            "The React frontend provides the voting interface, admin dashboard, registration flows, and election result views.",
        },

        {
          id: "metamask",
          name: "MetaMask",
          type: "Wallet",
          icon: "wallet",
          layer: "bottom",
          description:
            "MetaMask manages the user's Ethereum wallet and cryptographically signs blockchain transactions.",
        },

        {
          id: "web3",
          name: "Web3.js",
          type: "Blockchain Client",
          icon: "code",
          layer: "bottom",
          description:
            "Web3.js connects the React application to the Ethereum network and enables interaction with deployed smart contracts.",
        },

        {
          id: "contract",
          name: "Solidity Smart Contract",
          type: "Smart Contract",
          icon: "code",
          layer: "bottom",
          description:
            "The Solidity contract contains the core election logic, voter verification, candidate management, vote recording, and result retrieval.",
        },

        {
          id: "ethereum",
          name: "Ethereum",
          type: "Blockchain",
          icon: "database",
          layer: "bottom",
          description:
            "The Ethereum blockchain stores contract state and voting transactions in a decentralized and tamper-resistant environment.",
        },
      ],

      connections: [
        {
          from: "voter",
          to: "react",
          label: "vote / manage",
        },

        {
          from: "react",
          to: "web3",
          label: "contract call",
        },

        {
          from: "web3",
          to: "contract",
          label: "transaction",
        },
      ],

      final: {
        id: "results",
        name: "Transparent Results",
        type: "Output",
        icon: "chart",
        description:
          "Election results are retrieved from blockchain state and displayed through the application, providing transparent access to vote counts.",
      },

      finalLabel: "on-chain state",
    },

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
    number: "05",
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

    architecture: {
      title: "How MarketMentor works",

      description:
        "An AI-powered financial application where user questions flow through a Next.js API layer, are enriched with market information, processed by Groq-powered LLMs, and presented alongside real-time financial visualizations.",

      nodes: [
        {
          id: "user",
          name: "User",
          type: "Input",
          icon: "user",
          layer: "top",
          description:
            "Users interact with MarketMentor through natural-language financial questions and the interactive market interface.",
        },

        {
          id: "nextjs",
          name: "Next.js App",
          type: "Frontend",
          icon: "code",
          layer: "middle",
          description:
            "The Next.js application provides the responsive interface, chat experience, market dashboards, and dynamic financial visualizations.",
        },

        {
          id: "api",
          name: "Next.js API",
          type: "Backend",
          icon: "code",
          layer: "bottom",
          description:
            "API routes process user queries and coordinate communication between the frontend, AI model, and financial data sources.",
        },

        {
          id: "groq",
          name: "GroqCloud",
          type: "AI Engine",
          icon: "llm",
          layer: "bottom",
          description:
            "GroqCloud provides fast inference for the Llama-based model used to understand and respond to natural-language financial questions.",
        },

        {
          id: "market",
          name: "Market Data",
          type: "Financial Data",
          icon: "chart",
          layer: "bottom",
          description:
            "Financial information is used to enrich user queries with relevant market context and current stock information.",
        },

        {
          id: "tradingview",
          name: "TradingView",
          type: "Visualization",
          icon: "chart",
          layer: "bottom",
          description:
            "TradingView widgets provide interactive charts and market visualization components for exploring financial data.",
        },
      ],

      connections: [
        {
          from: "user",
          to: "nextjs",
          label: "query",
        },

        {
          from: "nextjs",
          to: "api",
          label: "API request",
        },

        {
          from: "api",
          to: "groq",
          label: "AI request",
        },

        {
          from: "api",
          to: "market",
          label: "market data",
        },
      ],

      final: {
        id: "response",
        name: "AI + Market Response",
        type: "Output",
        icon: "ai",
        description:
          "The AI response and financial information are combined into an interactive experience containing natural-language insights, charts, market data, and visual analytics.",
      },

      finalLabel: "insights + visualization",
    },

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
    number: "06",
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

    architecture: {
      title: "How BoxZone works",

      description:
        "A full-stack e-commerce architecture where users interact with a Next.js application, authenticated requests flow through protected APIs, business services manage products and orders, and MongoDB stores application data.",

      nodes: [
        {
          id: "user",
          name: "Customer",
          type: "Client",
          icon: "user",
          layer: "top",
          description:
            "Customers browse products, authenticate, manage their cart, place orders, and track their shopping activity.",
        },

        {
          id: "frontend",
          name: "Next.js / React",
          type: "Frontend",
          icon: "code",
          layer: "middle",
          description:
            "The frontend provides the product catalog, authentication screens, shopping cart, checkout, and order management experience.",
        },

        {
          id: "auth",
          name: "JWT Authentication",
          type: "Security",
          icon: "user",
          layer: "bottom",
          description:
            "JWT tokens authenticate users and protect application routes and API operations that require authorization.",
        },

        {
          id: "api",
          name: "Backend API",
          type: "API Layer",
          icon: "code",
          layer: "bottom",
          description:
            "The API layer handles authenticated requests and connects the frontend to product, cart, user, and order operations.",
        },

        {
          id: "products",
          name: "Product Service",
          type: "Business Logic",
          icon: "shopping-cart",
          layer: "bottom",
          description:
            "Product management handles catalog information, product retrieval, and administrative product operations.",
        },

        {
          id: "orders",
          name: "Cart & Orders",
          type: "Business Logic",
          icon: "shopping-cart",
          layer: "bottom",
          description:
            "Cart and order workflows manage selected products, checkout operations, and order creation.",
        },

        {
          id: "mongodb",
          name: "MongoDB",
          type: "Database",
          icon: "database",
          layer: "bottom",
          description:
            "MongoDB stores users, products, carts, orders, and other application data using a flexible document-oriented data model.",
        },
      ],

      connections: [
        {
          from: "user",
          to: "frontend",
          label: "browse + purchase",
        },

        {
          from: "frontend",
          to: "api",
          label: "API request",
        },

        {
          from: "api",
          to: "mongodb",
          label: "data access",
        },
      ],

      final: {
        id: "order",
        name: "Order Workflow",
        type: "Output",
        icon: "shopping-cart",
        description:
          "Authenticated users can complete cart and checkout workflows, resulting in persistent order records that can be managed through the platform.",
      },

      finalLabel: "purchase → order",
    },

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