import telemafiaImage from '../../assets/telemafia.avif'
import pocketSoulsImage from '../../assets/pocket_souls.png'

const timelineData = [
    {
        year: "July 2025 - Feb 2026",
        title: "Software Developer (Remote)",
        name: "Sonzai Labs",
        place: "Singapore",
        flagCode: "sg",
        type: "work",
        description: "",
        projects: [{
            name: "TeleMafia (Web3 Telegram Game)",
            about: "A Web3 social mafia game on Telegram featuring on-chain rewards and interactive gameplay, where players compete to earn respect and climb the social ladder.",
            contributions: [
                "Built backend services for a Web3 social game with on-chain rewards",
                "Integrated Privy wallets for secure transactions (MON, Ethereum)",
                "Implemented NFT transfer flows, daily check-ins, and on-chain “Respect” rewards",
                "Added in-app payments + cashback system"
            ],
            image: telemafiaImage
            
        },
        {
            name: "Pocket Souls (AI Companion)",
            about: "An AI companion platform designed to provide users with a persistent, supportive presence through personalized and dynamically generated interactions.",
            contributions: [
                "Developed backend for dynamic AI skill generation",
                "Implemented rate limiting to prevent abuse under load",
                "Contributed to CI/CD pipelines on GCP"
            ],
            image: pocketSoulsImage
        }]
    },
    {
        year: "Sept 2024 - Apr 2025",
        title: "Software Developer",
        name: "AI Brain Lab",
        place: "Thailand",
        flagCode: "th",
        type: "work",
        description: "",
        projects: [{
            name: "Edge AI Interview",
            about: "An AI-powered interview platform that automates candidate interviews to streamline the hiring process.",
            contributions: [
                "Built a React-based frontend for an AI interview system",
                "Trained and integrated facial emotion recognition and gaze tracking models to assess engagement",
            ]
        },
        {
            name: "API Library Platform",
            about: 'A platform providing machine learning services, including liveness detection, text-to-speech, and facial emotion recognition, exposed via APIs.',
            contributions: [
                "Built FastAPI-based REST APIs for authentication, token purchases, and ML service access",
                "Developed a lightweight frontend for management",
            ]
        },
        {
            name: "Salmate – Insurance Chat Solution",
            about: 'An AI-powered conversational platform that centralizes customer interactions across multiple channels and automates workflows such as support, ticketing, and communication.',
            contributions: [
                "Improved UX of Svelte-based frontend",
                "Secured routes with auth cookies and aligned frontend with Django backend changes",
            ]
        },
        {
            name: "Liveness Detection System",
            about: 'A machine learning system for liveness detection that distinguishes real users from spoofing attempts in real time.',
            contributions: [
                "Improved liveness detection accuracy (~90% → ~98%)",
                "Exposed real-time verification via FastAPI endpoints",
            ]
        }]
    },
    {
        year: "Aug 2021 – July 2024",
        title: "Master’s in Computer Science",
        name: "Asian Institue of Technology Thailand",
        place: "Thailand",
        flagCode: "th",
        type: "university",
        description: "Completed foundational computer science coursework including web application engineering, data structures, and compilers. Also pursued advanced courses in data science and AI, such as machine learning, data modeling, and natural language processing, earning a minor in Data Science & Artificial Intelligence."
    },
    {
        year: "Dec 2020 – Mar 2021",
        title: "Internship Trainee",
        name: "EPLO European Public Law Organization",
        place: "Greece",
        flagCode: "gr",
        type: "work",
        description: "Supported content updates and IT-related tasks across departments including Education, Marketing, and Digital Media."
    },
    {
        year: "Aug 2016 - May 2020",
        title: "Bachelor’s in Electrical Engineering",
        name: "National Institue of Technology, Durgapur",
        place: "India",
        flagCode: "in",
        type: "university",
        description: "Bachelor of Technology in Electrical Engineering, 4-year accredited program."
    },
    {
        year: "2015-2016",
        title: "High School",
        name: "Khartoum American School",
        place: "Sudan",
        flagCode: "sd",
        type: "school",
        description: ""
    },
    {
        year: "2013-2015",
        title: "High School",
        name: "Sana'a International School",
        place: "Yemen",
        flagCode: "ye",
        type: "school",
        description: ""
    },
    {
        year: "2010-2013",
        title: "High School",
        name: "Kathmandu International Study Centre",
        place: "Nepal",
        flagCode: "np",
        type: "school",
        description: "Done part of my high school as most was middle schooling"
    }

    // {
    //     year: "2018",
    //     title: "High School (International)",
    //     place: "India • Thailand • (3rd country)",
    //     type: "school",
    //     description: "Studied across multiple countries, gaining global exposure."
    // }
]

export default timelineData;