const workCurrent = document.querySelector("#work .current-hrs");
const workPrevious = document.querySelector("#work .previous-hrs");
const playCurrent = document.querySelector("#play .current-hrs");
const playPrevious = document.querySelector("#play .previous-hrs");
const studyCurrent = document.querySelector("#study .current-hrs");
const studyPrevious = document.querySelector("#study .previous-hrs");
const exerciseCurrent = document.querySelector("#exercise .current-hrs");
const exercisePrevious = document.querySelector("#exercise .previous-hrs");
const socialCurrent = document.querySelector("#social .current-hrs");
const socialPrevious = document.querySelector("#social .previous-hrs");
const selfCareCurrent = document.querySelector("#self-care .current-hrs");
const selfCarePrevious = document.querySelector("#self-care .previous-hrs");

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const fetchData = async () => {
  const response = await fetch("./data.json");

  const data = await response.json();

  return data;
};

const generateData = async () => {
  const data = await fetchData();

  const work = [
    data[0].timeframes.daily.current,
    data[0].timeframes.daily.previous,
    data[0].timeframes.weekly.current,
    data[0].timeframes.weekly.previous,
    data[0].timeframes.monthly.current,
    data[0].timeframes.monthly.previous,
  ];

  const play = [
    data[1].timeframes.daily.current,
    data[1].timeframes.daily.previous,
    data[1].timeframes.weekly.current,
    data[1].timeframes.weekly.previous,
    data[1].timeframes.monthly.current,
    data[1].timeframes.monthly.previous,
  ];

  const study = [
    data[2].timeframes.daily.current,
    data[2].timeframes.daily.previous,
    data[2].timeframes.weekly.current,
    data[2].timeframes.weekly.previous,
    data[2].timeframes.monthly.current,
    data[2].timeframes.monthly.previous,
  ];

  const exercise = [
    data[3].timeframes.daily.current,
    data[3].timeframes.daily.previous,
    data[3].timeframes.weekly.current,
    data[3].timeframes.weekly.previous,
    data[3].timeframes.monthly.current,
    data[3].timeframes.monthly.previous,
  ];

  const social = [
    data[4].timeframes.daily.current,
    data[4].timeframes.daily.previous,
    data[4].timeframes.weekly.current,
    data[4].timeframes.weekly.previous,
    data[4].timeframes.monthly.current,
    data[4].timeframes.monthly.previous,
  ];

  const selfCare = [
    data[5].timeframes.daily.current,
    data[5].timeframes.daily.previous,
    data[5].timeframes.weekly.current,
    data[5].timeframes.weekly.previous,
    data[5].timeframes.monthly.current,
    data[5].timeframes.monthly.previous,
  ];

  const arr = [work, play, study, exercise, social, selfCare];

  return arr;
};

let selection = "weekly";

daily.addEventListener("click", () => {
  selection = "daily";
  daily.style.color = "#fff";
  weekly.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "hsl(235, 45%, 61%)";
  populateDashboard();
});

weekly.addEventListener("click", () => {
  selection = "weekly";
  weekly.style.color = "#fff";
  daily.style.color = "hsl(235, 45%, 61%)";
  monthly.style.color = "hsl(235, 45%, 61%)";
  populateDashboard();
});

monthly.addEventListener("click", () => {
  selection = "monthly";
  monthly.style.color = "#fff";
  weekly.style.color = "hsl(235, 45%, 61%)";
  daily.style.color = "hsl(235, 45%, 61%)";
  populateDashboard();
});

const populateDashboard = async () => {
  const arr = await generateData();

  const work = arr[0];
  const play = arr[1];
  const study = arr[2];
  const exercise = arr[3];
  const social = arr[4];
  const selfCare = arr[5];

  if (selection === "daily") {
    workCurrent.innerHTML = `${work[0]}hrs`;
    workPrevious.innerHTML = `Yesterday - ${work[1]}hrs`;
    playCurrent.innerHTML = `${play[0]}hrs`;
    playPrevious.innerHTML = `Yesterday - ${play[1]}hrs`;
    studyCurrent.innerHTML = `${study[0]}hrs`;
    studyPrevious.innerHTML = `Yesterday - ${study[1]}hrs`;
    exerciseCurrent.innerHTML = `${exercise[0]}hrs`;
    exercisePrevious.innerHTML = `Yesterday - ${exercise[1]}hrs`;
    socialCurrent.innerHTML = `${social[0]}hrs`;
    socialPrevious.innerHTML = `Yesterday - ${social[1]}hrs`;
    selfCareCurrent.innerHTML = `${selfCare[0]}hrs`;
    selfCarePrevious.innerHTML = `Yesterday - ${selfCare[1]}hrs`;
  }
  if (selection === "weekly") {
    workCurrent.innerHTML = `${work[2]}hrs`;
    workPrevious.innerHTML = `Last week - ${work[3]}hrs`;
    playCurrent.innerHTML = `${play[2]}hrs`;
    playPrevious.innerHTML = `Last week - ${play[3]}hrs`;
    studyCurrent.innerHTML = `${study[2]}hrs`;
    studyPrevious.innerHTML = `Last week - ${study[3]}hrs`;
    exerciseCurrent.innerHTML = `${exercise[2]}hrs`;
    exercisePrevious.innerHTML = `Last week - ${exercise[3]}hrs`;
    socialCurrent.innerHTML = `${social[2]}hrs`;
    socialPrevious.innerHTML = `Last week - ${social[3]}hrs`;
    selfCareCurrent.innerHTML = `${selfCare[2]}hrs`;
    selfCarePrevious.innerHTML = `Last week - ${selfCare[3]}hrs`;
  }
  if (selection === "monthly") {
    workCurrent.innerHTML = `${work[4]}hrs`;
    workPrevious.innerHTML = `Last month - ${work[5]}hrs`;
    playCurrent.innerHTML = `${play[4]}hrs`;
    playPrevious.innerHTML = `Last month - ${play[5]}hrs`;
    studyCurrent.innerHTML = `${study[4]}hrs`;
    studyPrevious.innerHTML = `Last month - ${study[5]}hrs`;
    exerciseCurrent.innerHTML = `${exercise[4]}hrs`;
    exercisePrevious.innerHTML = `Last month - ${exercise[5]}hrs`;
    socialCurrent.innerHTML = `${social[4]}hrs`;
    socialPrevious.innerHTML = `Last month - ${social[5]}hrs`;
    selfCareCurrent.innerHTML = `${selfCare[4]}hrs`;
    selfCarePrevious.innerHTML = `Last month - ${selfCare[5]}hrs`;
  }
};

populateDashboard();
