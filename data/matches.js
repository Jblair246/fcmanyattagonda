/*
  MANYATTA GONDA FC - MATCH DATA
  =================================
  THIS IS THE MAIN FILE YOU WILL UPDATE AFTER EACH MATCH.

  Add a new object to the top of the matches array.
  Put your photos inside images/matches/ and update the photo paths.

  Result values:
    "W" = Win
    "D" = Draw
    "L" = Loss
    "UPCOMING" = Match has not been played

  IMPORTANT:
  Keep dates in YYYY-MM-DD format so the website can sort them correctly.
*/

const club = {
  name: "Manyatta Gonda FC",
  shortName: "GONDA",
  colours: ["#0b7a3b", "#111111", "#ffffff"],
  season: "2026"
};

const matches = [
  {
    id: 1,
    date: "2026-09-12",
    opponent: "Kisumu Combined",
    venue: "Kasagam School",
    competition: "Round Robbin Friendly",
    homeScore: 1,
    awayScore: 1,
    result: "D",
    playerOfMatch: "Vincent Odhiambo",
    report: "Manyatta Gonda FC played out a 1–1 draw against Kisumu Combined in a competitive round robbin encounter that offered plenty of encouragement despite the shared points.The result was not the only measure of the afternoon. Gonda showed clear signs of progress in the way the team built attacks from the back and managed possession. The tactical approach placed greater emphasis on creating overloads during the build-up, allowing the team to establish numerical advantages and progress the ball with greater confidence. This provided a stronger platform for controlling phases of the game and moving the team forward collectively.The approach also showed promise during transitions. Gonda were able to react more positively when possession changed hands, with the team looking increasingly comfortable moving from build-up into attacking phases and responding quickly after losing the ball. The improved structure gave the players clearer options and helped the team maintain its attacking intent. The main area requiring further development is the final third. While the team is becoming more effective at progressing the ball and arriving in advanced areas, the next challenge is turning that progression into more decisive actions around the opposition box. Improving the quality of the final pass, movement around the box, decision-making, chance creation and finishing will be key areas of focus as the team continues to develop.A 1–1 draw therefore represents a useful step in the team's development. There is still work to do, particularly in the final third, but the foundations being established in build-up and transition provide plenty of reason for optimism. The focus now turns to converting the quality of the team's possession and progression into greater attacking output in future matches.",
    scorers: [
      { player: "Victor Otieno", minute: "64'" },
      { player: "Brian Otieno", minute: "81'" },
    ],
    photos: [
      "images/matches/kasagammatch.jpg",
      "images/matches/kasagamteamphoto.jpg",
      "images/matches/kasagamdefenders.jpg"
    ]
  },
  {
    id: 2,
    date: "2026-09-19",
    opponent: "Wells FC",
    venue: "CITAM Grounds",
    competition: "Round Robbin Friendly",
    homeScore: 0,
    awayScore: 0,
    result: "D",
    playerOfMatch: "Fredrick Obach Amolo ",
    report: "Manyatta Gonda FC shared the points with Wells FC in a competitive league encounter, with the match ending in a draw.The result reflected a closely contested game in which both sides had their moments. For Gonda, the match provided another opportunity to test the team's developing approach and build greater consistency in the way we play, particularly when in possession.The team continued to show encouraging signs in its build-up play, with players becoming more comfortable finding solutions through different phases of possession. The emphasis on creating overloads around the ball is gradually giving the team more options during build-up and helping us progress play with greater confidence.There were also positive moments during transitions, where the team showed an improved understanding of how to react when possession changed. These moments remain an important part of the team's development as we continue working towards becoming more coordinated both with and without the ball.The biggest challenge remains in the attacking third. While the foundation in build-up and progression continues to improve, the team must become more decisive once it reaches the final third. Better movement, quicker combinations, quality of the final pass and greater composure in front of goal will be important as we look to turn promising phases of possession into clear scoring opportunities.The draw against Wells FC therefore becomes another useful reference point in the team's progression. Results remain important, but so is building an identity and developing a style of play that the players can execute consistently. The work continues, with the focus now on improving the final phase of our attacks and converting our progression into greater attacking output.",
    photos: [
      "images/matches/teamphoto.jpg",
      "images/matches/gabby.jpg",
      "images/matches/obach.jpg"
    ]
  },
  {
    id: 3,
    date: "2026-09-26",
    opponent: "TKD FC",
    venue: "Away",
    competition: "League",
    homeScore: null,
    awayScore: null,
    result: "UPCOMING",
    playerOfMatch: "",
    report: "",
    scorers: [],
    photos: []
  }
];

/*
  SQUAD
  =====
  Replace the sample players below with your real squad.
  Add player photos to images/players/.
*/
const squad = [
  { name: "Goalkeeper One", number: 1, position: "Goalkeeper", photo: "images/players/player-01.jpg" },
  { name: "Goalkeeper Two", number: 13, position: "Goalkeeper", photo: "images/players/player-02.jpg" },
  { name: "Defender One", number: 2, position: "Defender", photo: "images/players/bushman.jpg" },
  { name: "Defender Two", number: 4, position: "Defender", photo: "images/players/jakadere.jpg" },
  { name: "Midfielder One", number: 6, position: "Midfielder", photo: "images/players/gabby.jpg" },
  { name: "Midfielder Two", number: 8, position: "Midfielder", photo: "images/players/obach.jpg" },
  { name: "Midfielder Two", number: 14, position: "Midfielder", photo: "images/players/dennis mid.jpg" },
  { name: "Forward One", number: 9, position: "Forward", photo: "images/players/odawa.jpg" },
  { name: "Forward Two", number: 11, position: "Forward", photo: "images/players/eugine.jpg" }
];
