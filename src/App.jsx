import { useState, useEffect } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";
import SimpleSlider from "./components/SimpleSlider";

const App = () => {
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const savedIsViewed = localStorage.getItem("isViewed");

    if (savedIsViewed === "1") {
      setIsViewed(true);
    }
  }, []);

  return (
    <div className="font-pretendard">
      {!isViewed && <TopBanner setIsViewed={setIsViewed} />}
      <Header />
      <SlideBanner />
      <SimpleSlider />
    </div>
  );
};

export default App;
