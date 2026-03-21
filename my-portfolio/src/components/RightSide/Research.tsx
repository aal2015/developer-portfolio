const researchData = [
    {
        title: "Exploring Adjacent Layer Grafting for Language Model Compression",
        subtitle: "Graduate Research | Asian Institute of Technology, Thailand (Jan 2023 – July 2024)",
        bulletPoints: [
            "Investigated inter-layer redundancy in BERT",
            "Demonstrated that reducing the number of layers yields greater speedups than reducing layer width",
            "Proposed a technique to graft key attention heads and intermediate dimensions from adjacent layers into a single layer",
            "Applied this method to GLUE classification tasks, achieving comparable performance with fewer parameters"
        ],
        status: "Currently preparing for academic publication"
    },
    {
        title: "Neural Network-Based Time Delay Estimation for UHF Partial Discharge Signals",
        subtitle: "Undergraduate Research | NIT Durgapur, India (Aug 2019 – May 2020)",
        bulletPoints: [
            "Developed a neural network model to estimate time delays between UHF signals emitted by partial discharge sources in power systems",
            "Compared neural network performance with traditional time-domain methods (first peak, cumulative energy) on simulated and experimental data",
            "Demonstrated strong performance under high-SNR conditions and outlined future improvement with better hyperparameters",
            "Conducted experimental validation in a lab-scale grid environment"
        ],
        status: "Published in: Proceedings of the 1st International Conference on Power Electronics and Energy (ICPEE-2021)"
    }
]

const Research = () => {
    return (<>
        <h2 className="text-3xl font-bold text-white mb-3">Research</h2>

        {researchData.map((research, index) => (
            <div key={index} className="relative">
                {/* Dot */}
                <div className="absolute -left-3 top-2 w-5 h-5 rounded-full bg-blue-400 shadow-md"></div>

                {/* Card */}
                <div key={index} className="ml-4 p-4 rounded-lg hover:bg-white/5 transition">
                    <h4 className="text-white text-xl font-semibold">{research.title}</h4>
                    <h5 className="text-blue-100 text-lg font-semibold">{research.subtitle}</h5>
                    <ul className="list-disc ml-5">
                        {research.bulletPoints.map((item, i) => (
                            <li key={i} className="text-blue-100">{item}</li>
                        ))}
                        <li className="text-white font-semibold">{research.status}</li>
                    </ul>
                </div>
            </div>

        ))}
    </>);
}

export default Research