

const Skills = () => {

    return (
        <div className="text-blue-100 font-medium">
            <h2 className="text-3xl font-bold text-white mb-3">Skills</h2>
            <div className="grid grid-cols-3 gap-y-4">
                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit">
                    Programming Language
                </div>
                <div className="col-span-2">Python, Go, TypeScript, JavaScript, SQL</div>

                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit">
                    Frontend
                </div>
                <div className="col-span-2">React, Angular, Svelte, HTML, CSS, jQuery</div>

                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit h-fit">
                    Backend and APIs
                </div>
                <div className="col-span-2">
                    FastAPI, Flask, Django, Node.js, Bun, Nakama, RESTful APIs, Microservices, Telegram Bots
                </div>

                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit h-fit">
                    Databases
                </div>
                <div className="col-span-2">MySQL, PostgreSQL, MongoDB, ScyllaDB</div>

                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit h-fit">
                    Cloud & DevOps
                </div>
                <div className="col-span-2">
                    Docker, GCP, Cloudflare Workers, CI/CD (GitHub Actions), Git
                </div>

                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit h-fit">
                    AI/ML
                </div>
                <div className="col-span-2">
                    Machine Learning, Deep Learning, Natural Language Processing (NLP), Data Science
                </div>

                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit h-fit">
                    ML Libraries
                </div>
                <div className="col-span-2">
                    NumPy, Pandas, scikit-learn, Matplotlib, Seaborn, PyTorch, Hugging Face, OpenCV
                </div>

                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit h-fit">
                    Web3
                </div>
                <div className="col-span-2">
                    Ethereum, Monad, Smart Contracts (Testing), NFT Flows, Wallet Integration (Privy)
                </div>

                <div className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit h-fit">
                    Testing & Practices
                </div>
                <div className="col-span-2">
                    Unit Testing, Integration Testing, Agile/Scrum
                </div>
            </div>
        </ div>
    );

}

export default Skills;