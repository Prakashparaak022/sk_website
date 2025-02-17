import React from 'react'
import Navbar from './Navbar'
import SlideCarousel from './SlideCarousel'
import GameCarousel from './GameCarousel'
import GameBar from './GameBar'
import cricket from "../assets/images/cricket_small.png";

import AGame_image_1 from "../assets/images/A_Game_1.jpg";
import AGame_image_2 from "../assets/images/A_Game_2.jpg";
import AGame_image_3 from "../assets/images/A_Game_3.jpg";

import BGame_image_1 from "../assets/images/B_Game_1.jpg";
import BGame_image_2 from "../assets/images/B_Game_2.jpg";
import BGame_image_3 from "../assets/images/B_Game_3.jpg";

import CGame_image_1 from "../assets/images/C_Game_1.jpg";
import CGame_image_2 from "../assets/images/C_Game_2.jpg";
import CGame_image_3 from "../assets/images/C_Game_3.jpg";

import DGame_image_1 from "../assets/images/D_Game_1.jpg";
import DGame_image_2 from "../assets/images/D_Game_2.jpg";
import DGame_image_3 from "../assets/images/D_Game_3.jpg";
import CardComponent from './CardComponent'
import Footer from './Footer';

function Home() {
  
  const AGameImageList = [
    AGame_image_1,
    AGame_image_2,
    AGame_image_3,
    AGame_image_1,
    AGame_image_2,
  ];

  const BGameImageList = [
    BGame_image_1,
    BGame_image_2,
    BGame_image_3,
    BGame_image_1,
    BGame_image_2,
  ];

  const CGameImageList = [
    CGame_image_1,
    CGame_image_2,
    CGame_image_3,
    CGame_image_1,
    CGame_image_2,
  ];

  const DGameImageList = [
    DGame_image_1,
    DGame_image_2,
    DGame_image_3,
    DGame_image_1,
    DGame_image_2,
  ];

  
  const cardDetailsList = [
    {
      image: cricket,
      title: "Cricket FIVE5 World League Cyberbattle",
      time: "1INNS",
      teamA: "South Africa (Cyberbattle)",
      teamAScore: "62/1",
      teamB: "South Africa (Cyberbattle)",
      teamBScore: "37/0",
      winnerHScore: "1.65",
      winnerAScore: "2.09",
    },
    {
      image: cricket,
      title: "Cricket FIVE5 World League Cyberbattle",
      time: "1INNS",
      teamA: "South Africa (Cyberbattle)",
      teamAScore: "62/1",
      teamB: "South Africa (Cyberbattle)",
      teamBScore: "37/0",
      winnerHScore: "1.65",
      winnerAScore: "2.09",
    },
    {
      image: cricket,
      title: "Cricket FIVE5 World League Cyberbattle",
      time: "1INNS",
      teamA: "South Africa (Cyberbattle)",
      teamAScore: "62/1",
      teamB: "South Africa (Cyberbattle)",
      teamBScore: "37/0",
      winnerHScore: "1.65",
      winnerAScore: "2.09",
    },

    {
      image: cricket,
      title: "Cricket FIVE5 World League Cyberbattle",
      time: "1INNS",
      teamA: "South Africa (Cyberbattle)",
      teamAScore: "62/1",
      teamB: "South Africa (Cyberbattle)",
      teamBScore: "37/0",
      winnerHScore: "1.65",
      winnerAScore: "2.09",
    },
  ];

  const cardDetailsList2 = [
    {
      image: cricket,
      title: "International League T20",
      time: "",
      teamA: "South Africa (Cyberbattle)",
      teamAScore: "62/1",
      teamB: "South Africa (Cyberbattle)",
      teamBScore: "37/0",
      winnerHScore: "1.65",
      winnerAScore: "2.09",
    },
    {
      image: cricket,
      title: "Australia WNCL",
      time: "02/03 04:30",
      teamA: "South Africa (Cyberbattle)",
      teamAScore: "",
      teamB: "Queensland Fire (W)",
      teamBScore: "",
      winnerHScore: "2.33",
      winnerAScore: "2.09",
    },
    {
      image: cricket,
      title: "5th T20",
      time: "",
      teamA: "India",
      teamAScore: "-",
      teamB: "England",
      teamBScore: "-",
      winnerHScore: "--",
      winnerAScore: "--",
    },

    {
      image: cricket,
      title: "Nepal Womens T20 Tri-Series",
      time: "1INNS",
      teamA: "Netherlands (W)",
      teamAScore: "",
      teamB: "Thailand (W)",
      teamBScore: "",
      winnerHScore: "1.65",
      winnerAScore: "2.09",
    },
  ];

  return (
    <>
    <Navbar/>
    <SlideCarousel />
    <GameBar />
    <CardComponent title = {"Exchange"} cardDetailsList = {cardDetailsList}/>
    <GameCarousel title = {"Instant Games"} imageList={AGameImageList} />
    <GameCarousel title = {"Slots"} imageList={BGameImageList} />
    <CardComponent title = {"Sports"} cardDetailsList = {cardDetailsList2}/>
    <GameCarousel title = {"Fishing"} imageList={CGameImageList} />
    <GameCarousel title = {"Board Game"} imageList={DGameImageList} />
    <Footer />
    </>
  )
}

export default Home