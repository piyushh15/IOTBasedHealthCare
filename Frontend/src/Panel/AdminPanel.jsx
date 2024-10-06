import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";

const AdminPanel = () => {
  const myCard = [
    { title: "Patients", route: "/patients", value: "345" },
    { title: "Doctors", route: "/doctors", value: "52" },
    { title: "Hospitalised", route: "/hospitalised", value: "232" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-poppins justify-between">
      {/* Header */}
      <Header isHomePage={false} isDoctor={false} />

      {/* Dashboard Main Content */}
      <main className="flex-grow text-center">
        <Hero
          mainHeading={["Admin", "Dashboard"]}
          paragraph={
            " Our platform provides real-time patient monitoring and seamlessly assigns specialized doctors based on health data, ensuring timely and personalized medical care."
          }
        />

        {/* Cards Section */}
        <div className="flex justify-around items-center gap-8 px-[160px] ">
          {myCard.map((card) => (
            <Card
              key={card.title}
              route={card.route}
              title={card.title}
              value={card.value}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AdminPanel;
