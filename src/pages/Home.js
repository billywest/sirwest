import React, { Suspense } from "react";
import Header from "../components/layout/header/Header";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
    </div>
  );
};

export default Home;
