import React, { createContext, useState, useContext } from "react";

const HackathonContext = createContext();

export const useHackathons = () => useContext(HackathonContext);

export const HackathonProvider = ({ children }) => {
  const [hackathons, setHackathons] = useState([]);

  const addHackathon = (newHackathon) => {
    setHackathons([...hackathons, { ...newHackathon, id: Date.now() }]);
  };

  const updateHackathon = (updatedHackathon) => {
    setHackathons(
      hackathons.map((hackathon) =>
        hackathon.id === updatedHackathon.id ? updatedHackathon : hackathon
      )
    );
  };

  const deleteHackathon = (id) => {
    setHackathons(hackathons.filter((hackathon) => hackathon.id !== id));
  };

  return (
    <HackathonContext.Provider
      value={{ hackathons, addHackathon, updateHackathon, deleteHackathon }}
    >
      {children}
    </HackathonContext.Provider>
  );
};
