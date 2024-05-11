"use strict";

let nfl_teams = [
    { code: "ARI", name: "Arizona Cardinals", plays: "Glendale, AZ" },
    { code: "ATL", name: "Atlanta Falcons", plays: "Atlanta, GA" },
    { code: "BAL", name: "Baltimore Ravens", plays: "Baltimore, MD" },
    { code: "BUF", name: "Buffalo Bills", plays: "Orchard Park, NY" },
    { code: "CAR", name: "Carolina Panthers", plays: "Charlotte, NC" },
    { code: "CHI", name: "Chicago Bears", plays: "Chicago, IL" },
    { code: "CIN", name: "Cincinnati Bengals", plays: "Cincinnati, OH" },
    { code: "CLE", name: "Cleveland Browns", plays: "Cleveland, OH" },
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "DET", name: "Detroit Lions", plays: "Detroit, MI" },
    { code: "GB", name: "Green Bay Packers", plays: "Green Bay, WI" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "IND", name: "Indianapolis Colts", plays: "Indianapolis, IN" },
    { code: "JAX", name: "Jacksonville Jaguars", plays: "Jacksonville, FL" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
    { code: "LV", name: "Las Vegas Raiders", plays: "Las Vegas, NV" },
    { code: "LAC", name: "Los Angeles Chargers", plays: "Carson, CA" },
    { code: "LAR", name: "Los Angeles Rams", plays: "Inglewood, CA" },
    { code: "MIA", name: "Miami Dolphins", plays: "Miami Gardens, FL" },
    { code: "MIN", name: "Minnesota Vikings", plays: "Minneapolis, MN" },
    { code: "NE", name: "New England Patriots", plays: "Foxborough, MA" },
    { code: "NO", name: "New Orleans Saints", plays: "New Orleans, LA" },
    { code: "NYG", name: "New York Giants", plays: "East Rutherford, NJ" },
    { code: "NYJ", name: "New York Jets", plays: "East Rutherford, NJ" },
    { code: "PHI", name: "Philadelphia Eagles", plays: "Philadelphia, PA" },
    { code: "PIT", name: "Pittsburgh Steelers", plays: "Pittsburgh, PA" },
    { code: "SF", name: "San Francisco 49ers", plays: "Santa Clara, CA" },
    { code: "SEA", name: "Seattle Seahawks", plays: "Seattle, WA" },
    { code: "TB", name: "Tampa Bay Buccaneers", plays: "Tampa, FL" },
    { code: "TEN", name: "Tennessee Titans", plays: "Nashville, TN" },
    { code: "WAS", name: "Washington Commanders", plays: "Landover, MD" }
];

const submitBtn = document.getElementById("submitButton");
const nflTeamDropDownSelect = document.getElementById("nflTeamDropDown");



window.onload = function () {

    initialize()

    submitBtn.onclick = displayInfo;
}


function initialize() {
    let select = document.getElementById("football-select");

    select.innerHTML = "";

    for (let i = 0; i < nfl_teams.length; i++) {
        let option = document.createElement("option");
        option.text = nfl_teams[i].name;
        option.value = nfl_teams[i].code;
        select.appendChild(option);

    }

}

function displayInfo() {
    let select = document.getElementById("football-select");
    let selectedTeamCode = select.value;

    let selectedTeamName;
    let selectedTeamPlays;

    for (let i = 0; i < nfl_teams.length; i++) {
        if (nfl_teams[i].code === selectedTeamCode) {
            selectedTeamName = nfl_teams[i].name;
            selectedTeamPlays = nfl_teams[i].plays;
            break;
        }
    }

    let infoParagraph = document.getElementById("team-info");

    infoParagraph.innerHTML = `Team: ${selectedTeamName}, Location: ${selectedTeamPlays}`

}


