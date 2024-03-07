import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Trending24 from "../components/Trending24";
import TrendingCoins from "../components/TrendingCoins";
import Team from "../components/Team";
import Tokenomics from "../components/Tokenomics";
import TradingViewWidget from "../components/TradingViewWidget";
import Heading from "../components/Heading";
import KeyEvents from "../components/KeyEvents";
import AboutCoin from "../components/AboutCoin";
import { useParams } from "react-router-dom";

const Home = () => {
  const overviewRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const sentimentsRef = useRef(null);
  const teamRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [tokenData, setTokenData] = useState({});
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = id
          ? await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
          : await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
        const data = await res.json();
        console.log(data)
        if (data.error) {
          setError(data.error);
        } else {
          setTokenData(data);
        }
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  const scrollToOverview = () => {
    overviewRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab("Overview");
  };

  const scrollToTokenomics = () => {
    tokenomicsRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab("Tokenomics");
  };
  const scrollToTeams = () => {
    teamRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab("Team");
  };
  const scrollToSentiments = () => {
    sentimentsRef.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab("Sentiments");
  };

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      {error ? (
        <p className="text-red-900">{error}</p>
      ) : (
        <>
          <div className="w-[100vw] flex lg:flex-row vsm:flex-col gap-2 py-5">
            <div className="lg:w-[74vw] vsm:w-full flex flex-col gap-5 lg:gap-2 md:px-10 vsm:p-3">
              {/* Main chart section */}
              <div className="w-full h-[70vh] flex flex-col items-center">
                <div className="w-full">
                  <Heading
                    imageLink={tokenData?.image?.thumb}
                    name={tokenData?.name}
                    symbol={tokenData?.symbol}
                    Rank={tokenData?.market_cap_rank}
                    usdPrice={tokenData?.market_data?.current_price.usd}
                    inrPrice={tokenData?.market_data?.current_price.inr}
                    change24={
                      tokenData?.market_data?.price_change_24h_in_currency.usd
                    } // Corrected this line
                  />
                </div>
                <TradingViewWidget />
              </div>
              {/*  Market data Token Info section */}
              <div className="w-full flex flex-col gap-6 my-2">
                <div className="w-full overflow-scroll scroll-smooth no-scrollbar flex flex-col gap-3">
                  <div className="flex flex-row gap-10">
                    <div
                      onClick={scrollToOverview}
                      style={{
                        color: activeTab === "Overview" ? "blue" : "black",
                      }}
                      className="font-medium"
                    >
                      Overview
                    </div>
                    <div className="font-medium">Fundamentals</div>
                    <div className="font-medium">News_Insights</div>
                    <div
                      className="font-medium"
                      onClick={scrollToSentiments}
                      style={{
                        color: activeTab === "Sentiments" ? "blue" : "black",
                      }}
                    >
                      Sentiments
                    </div>
                    <div
                      className="font-medium"
                      onClick={scrollToTeams}
                      style={{ color: activeTab === "Team" ? "blue" : "black" }}
                    >
                      Team
                    </div>
                    <div className="font-medium"> Technicals</div>
                    <div
                      className="font-medium"
                      onClick={scrollToTokenomics}
                      style={{
                        color: activeTab === "Tokenomics" ? "blue" : "black",
                      }}
                    >
                      {" "}
                      Tokenomics
                    </div>
                  </div>
                  <div className="bg-gray-400 w-full vsm:w-[220%] h-[0.1rem] rounded-xl"></div>
                </div>
                <div
                  className="w-full p-5 flex flex-col bg-white rounded-xl gap-5"
                  ref={overviewRef}
                >
                  <div className="text-xl font-semibold ">Perfomance</div>
                  <div className="w-full flex flex-row justify-between gap-1 items-center ">
                    <div className="flex flex-col">
                      <div className="flex">Today's Low</div>
                      <div>{"$" + tokenData?.market_data?.low_24h.usd}</div>
                    </div>
                    <div className="md:w-[70%] vsm:w-[50%] bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 h-[0.3rem] rounded-xl"></div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex">Today's High</div>
                      <div>{"$" + tokenData?.market_data?.high_24h.usd}</div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                      <div>52W Low</div>
                      <div>{"$" + tokenData?.market_data?.atl.usd}</div>
                    </div>
                    <div className="md:w-[70%] vsm:w-[50%] bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 h-[0.3rem] rounded-xl"></div>
                    <div className="flex flex-col">
                      <div>52W High</div>
                      <div>{"$" + tokenData?.market_data?.ath.usd}</div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="text-[1rem] font-medium my-5">
                      Fundamentals
                    </div>
                    <div className="w-full grid md:grid-cols-2 vsm:grid-cols-1 gap-x-20 gap-y-5">
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">Bitcoin Price</div>
                          <div className="font-medium">
                            {tokenData?.market_data?.current_price.usd}
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">Market Cap</div>
                          <div className="font-medium">
                            {tokenData?.market_data?.market_cap.usd}
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">24h Low/24h High</div>
                          <div className="font-medium">
                            {tokenData?.market_data?.low_24h.usd}/
                            {tokenData?.market_data?.high_24h.usd}
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">
                            Market Cap Dominance
                          </div>
                          <div className="font-medium">83.2%</div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">7d Low / 7d High</div>
                          <div className="font-medium">
                            {
                              tokenData?.market_data
                                ?.price_change_percentage_7d_in_currency.usd
                            }
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center ">
                          <div className="w-full text-gray-500 md:w-[50%]">
                            Volume / Market Cap
                          </div>
                          <div className="font-medium md:w-[50%]  md:flex flex-wrap items-end">
                            {tokenData?.market_data?.total_volume.usd} /{" "}
                            {tokenData?.market_data?.market_cap.usd}
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">Trading Volume</div>
                          <div className="font-medium">
                            {tokenData?.market_data?.total_volume.usd}
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">All-Time High</div>
                          <div className="font-medium">
                            {tokenData?.market_data?.ath.usd}
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">Market Cap Rank</div>
                          <div className="font-medium">
                            #{tokenData?.market_cap_rank}
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex flex-row justify-between items-center">
                          <div className="text-gray-500">All-Time Low</div>
                          <div className="font-medium">
                            {tokenData?.market_data?.atl.usd}
                          </div>
                        </div>
                        <div className="w-full h-[0.15rem] bg-gray-300 rounded-xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sentiments */}
                <div
                  className="w-full p-5 flex-col flex bg-white rounded-xl gap-5"
                  ref={sentimentsRef}
                >
                  <div className="font-bold text-xl">Sentiment</div>
                  <div className="flex flex-col">
                    <div className="font-medium text-gray-500">Key Events</div>
                    <div>
                      <KeyEvents />
                    </div>
                  </div>
                  {/* analyt Estimate */}
                  <div className="w-full flex-col gap-2">
                    <div className="text-gray-400 font-medium">
                      {" "}
                      Analysts Estimates
                    </div>
                    <div className="w-full flex flex-row gap-4">
                      <div
                        className={`w-20 h-20 rounded-full bg-green-200 text-green-600 flex justify-center items-center font-bold text-xl`}
                      >
                        76%
                      </div>
                      <div className="flex flex-col w-[70%]">
                        <div className="flex flex-row gap-5 items-center rounded-xl">
                          <div>Buy</div>
                          <div className="w-[70%]">
                            <div className="w-[76%] bg-green-600 h-1 rounded-xl"></div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5 items-center rounded-xl">
                          <div>Hold</div>
                          <div className="w-[70%]">
                            <div className="w-[8%] bg-gray-300 h-1 rounded-xl"></div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5 items-center rounded-xl">
                          <div>Sell</div>
                          <div className="w-[70%]">
                            <div className="w-[16%] bg-red-600 h-1 rounded-xl"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* About bitcoin */}
                <div className="w-full flex flex-col">
                  <AboutCoin
                    data={tokenData?.description?.en.slice(0, 500)}
                    name={tokenData?.name}
                  />
                </div>
                {/* Tokenomics */}
                <div className="w-full" ref={tokenomicsRef}>
                  <Tokenomics />
                </div>
                {/* Team */}
                <div ref={teamRef}>
                  <Team />
                </div>
              </div>
            </div>
            <div className="lg:w-[25vw] vsm:w-full flex flex-col gap-5 vsm:p-3 lg:p-5 md:px-10">
              <Banner />
              <Trending24 />
            </div>
          </div>
          <div className="w-full bg-white md:p-10 flex flex-col vsm:p-1">
            <div className="flex flex-col gap-2 md:px-10 vsm:px-2">
              <div className="text-xl font-medium">You May Also Like</div>
              <TrendingCoins />
            </div>
            <div className="flex flex-col gap-2 md:px-10 vsm:px-2">
              <div className="text-xl font-medium">Trending Coins</div>
              <TrendingCoins />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
