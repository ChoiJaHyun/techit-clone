import { useState, useEffect } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";
import Spline from "@splinetool/react-spline";

const App = () => {
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const savedIsViewed = localStorage.getItem("isViewed");

    if (savedIsViewed === "1") {
      setIsViewed(true);
    }
  }, []);

  return (
    <div className="font-pretendard text-techit-gray-300">
      {!isViewed && <TopBanner setIsViewed={setIsViewed} />}
      <Header />
      <SlideBanner />
      <div>
        <Spline scene="https://prod.spline.design/rHjm3vB7zevlavRW/scene.splinecode" />
      </div>
    </div>
  );
};

export default App;
