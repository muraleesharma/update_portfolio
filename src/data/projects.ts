export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    longDescription?: string;
    metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
    {
        id: "resume-ready",
        title: "ResumeReady.in - Free resume builder",
        description: "A full working Resume builder application that allows users to create, customize, and download professional resumes seamlessly.",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "React", "Tailwind"],
        liveUrl: "https://resumeready.in/",
        githubUrl: "#",
        metrics: [
            { label: "User Base", value: "5,000+" },
            { label: "Resumes Built", value: "12,000+" },
        ]
    },
    {
        id: "reels-automation",
        title: "Reels Creation Automation Tool using AI",
        description: "A complete automation pipeline that uses generative AI tools to script, generate, and edit engaging short-form video reels without manual intervention.",
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "OpenAI API", "FFmpeg", "Automation"],
        liveUrl: "#",
        githubUrl: "#",
        longDescription: `This AI-powered automation tool is designed to script, generate, and edit short-form reels suitable for Instagram, TikTok, and YouTube Shorts. 

It integrates with the OpenAI API for script generation and uses FFmpeg along with other generative AI tools for video and audio synthesis. The result is a completely hands-off content creation pipeline capable of producing highly engaging visual content on a schedule.`,
        metrics: [
            { label: "Automation Time", value: "Save 30hrs/week" },
            { label: "Processing Speed", value: "60s per Reel" },
        ]
    },
    {
        id: "business-portfolio",
        title: "Personalized Business Portfolio Websites",
        description: "High-converting, bespoke portfolio websites designed specifically for entrepreneurs and businessmen, built with sleek modern aesthetics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Next.js", "Tailwind CSS"],
        liveUrl: "#",
        githubUrl: "#",
        longDescription: `A suite of customizable business portfolio templates that prioritize high conversion and premium aesthetics. 

Built with React, Next.js, and Tailwind CSS, these portfolios feature blazing-fast loading speeds, SEO optimization, and an intuitive CMS for content updates. Targeted to entrepreneurs looking for a distinct online presence.`,
        metrics: [
            { label: "Performance Score", value: "100/100" },
            { label: "SEO Optimized", value: "100%" },
        ]
    },
    {
        id: "nse-swing-trading",
        title: "NSE Swing Trading Intelligence Platform",
        description: "An advanced algorithmic trading platform tailored for NSE, integrating real-time market data, predictive AI models, and automated execution APIs for quantitative swing strategies.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "Django", "React", "WebSockets"],
        liveUrl: "#",
        githubUrl: "#",
        longDescription: `This proprietary platform provides traders with advanced tooling to test and execute quantitative swing strategies on the National Stock Exchange (NSE). 

It ingests real-time WebSocket market data, pushes it through Django backend algorithms, and visualizes predictions via a React interface. Integrated predictive models help identify potential breakout configurations before they occur.`,
        metrics: [
            { label: "Data Throughput", value: "10k events/sec" },
            { label: "Execution Speed", value: "< 200ms" },
        ]
    },
    {
        id: "pattern-analyzer",
        title: "Behavioral Pattern Analyzer (Trader Personality Engine)",
        description: "A data-driven engine that analyzes historical trading behaviors and psychological patterns to generate personalized insights for traders, improving discipline and consistency.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "Data Science", "Machine Learning"],
        liveUrl: "#",
        githubUrl: "#",
        longDescription: `A specialized analytics engine that connects to trading accounts and examines past trades. 

Using machine learning, it identifies emotional investing habits, overtrading patterns, and risk mismanagement. The engine then offers actionable feedback loops to instill better discipline and improve long-term profitability.`,
        metrics: [
            { label: "Insights Generated", value: "50+ Patterns" },
            { label: "Trader Discipline", value: "+35% Improvement" },
        ]
    },
    {
        id: "psychology-lab",
        title: "AI Trading Psychology Lab (Simulation Engine)",
        description: "An interactive simulation environment designed to test and refine trading psychology under pressure, utilizing AI to replicate live market conditions.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "AI Integrations", "Framer Motion"],
        liveUrl: "#",
        githubUrl: "#",
        longDescription: `A psychological simulation environment that places traders in challenging market scenarios. 

By accurately simulating extreme volatility, high-stress, and rapid decision-making context, the lab acts as a "gym" to train emotional control. Built with Next.js, it uses Framer Motion for highly dynamic and stressful visual feedback during simulations.`,
        metrics: [
            { label: "Scenarios", value: "100+ Market Types" },
            { label: "User Engagement", value: "Avg 45 mins" },
        ]
    },
    {
        id: "system-automation",
        title: "System & Work Automation Solutions",
        description: "Custom-built internal automation scripts and headless workflows engineered to replace repetitive manual tasks, driving operational efficiency across enterprise environments.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "Node.js", "Cron", "DevOps"],
        liveUrl: "#",
        githubUrl: "#",
        longDescription: `A collection of robust, headless automation scripts built primarily using Node.js and Python. 

These solutions are orchestrated using Cron and deep integration with cloud provider APIs to handle tasks such as database synchronization, reporting, logging, and infrastructure scaling, vastly reducing the manual operational overhead.`,
        metrics: [
            { label: "Manual Effort", value: "Reduced 80%" },
            { label: "Uptime", value: "99.99%" },
        ]
    },
];
