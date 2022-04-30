import React, { useEffect, useState } from "react";
import { CardGroup, Card, Image } from "react-bootstrap";
import champApi from "../../modules/champApi";
import riotApi from "../../modules/riotApi";
import _ from "lodash";
import "./styles.css";

export default function Champs() {
  const [champions, setChampions] = useState([]);

  const getChampImg = (key) => {
    return riotApi.getChampionImageByKey(key);
  };

  useEffect(() => {
    const champs = riotApi.getChampionsList();
    setChampions(champs);
  }, []);

  return (
    <div className="Home">
      {champions.length > 0 ? (
        champions.map((champ) => {
          return <Image src={getChampImg(champ.key)} />;
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
