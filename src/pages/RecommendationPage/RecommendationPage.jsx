import "./RecommendationPage.scss";
import "../../App.scss";

function RecommendationPage() {
    const networkObj = JSON.parse(localStorage.getItem("networks"));
    console.log(networkObj);
    let networkArr = Object.keys(networkObj);

    let networkWithScores = networkArr.map((network) => (
    {
        name: network,
        score: Math.round(networkObj[network] *  100 / 9),
    }
    ));

    networkWithScores.sort((a, b) => b.score - a.score);

    return (
        <div className="recommendation">
            <h2>Network analysis breakdown</h2>
            <h3>{networkWithScores.map((ntwk, index) => {
                const opacity = ntwk.score / 30;

                return (
                    <div
                    key={index}
                    style={{
                        backgroundColor: `rgba(57, 181, 74, ${opacity})`, 
                        padding: "10px",  
                        marginBottom: "10px",  
                        borderRadius: "5px",  
                    }}
                    >
                    <p>{ntwk.name}: {ntwk.score}%</p>
                    </div>
                );
                })}
            </h3>

            <div className="recommendation-header">
                <h1>We think you'd like</h1>
                <h2>A bundle with these channels</h2>
            </div>


            <div className="recommendation-cards">
                <div className="recommendation-cards__card">
                    <div className="recommendation-cards__card-header">
                        <h2>{networkWithScores[1].name}</h2>
                    </div>
                    <div className="recommendation-cards__card-body">
                        <h3>{networkWithScores[1].score}%</h3>
                        <p>Strongly recommended based on your preferences</p>
                    </div>
                </div>

                <div className="recommendation-cards__card" id="popular">
                    <div className="recommendation-cards__card-header">
                        <h2>{networkWithScores[0].name}</h2>
                        <p>Best Match</p>
                        <p>Available in the <strong>OPTIC TV Platinum Bundle</strong></p>
                    </div>
                    <div className="recommendation-cards__card-body">
                    <h3>{networkWithScores[0].score}%</h3>
                        <strong>$94/month for 11 theme packs of your choice</strong>
                    </div>
                </div>

                <div className="recommendation-cards__card">
                    <div className="recommendation-cards__card-header">
                        <h2>{networkWithScores[2].name}</h2>
                    </div>
                    <div className="recommendation-cards__card-body">
                        <h3>{networkWithScores[2].score}%</h3>
                        <p>Strongly recommended based on your preferences</p>
                    </div>
                </div>
            </div>

            <div className="learn-more">
                <a href="https://www.telus.com/en/shop/home-services/optik/plans?linkname=Plans&linktype=ge-meganav">Learn more about our other options</a>
            </div>
        </div>
    );
}

export default RecommendationPage;
