let sortDirection = false;
    let teamData = [
        {team: 'Manchester City', pg: '37', w: '26', l: '6', d: 5, points: 83 },
        {team: 'Manchester United', pg: 37, w: 20, l: 6, d: 11, points: 71 },
        {team: 'Chelsea', pg: 37, w: 19, l: 8, d: 10, points: 67 },
        {team: 'Liverpool', pg: 37, w: 19, l: 9, d: 9, points: 66 },
        {team: 'Leichester', pg: 37, w: 20, l: 11, d: 6, points: 66 },
        {team: 'West Ham', pg: 37, w: 18, l: 11, d: 8, points: 62 },
        {team: 'Tottenham', pg: 37, w: 17, l: 12, d: 8, points: 59 },
        {team: 'Everton', pg: 37, w: 17, l: 12, d: 8, points: 59 },
        {team: 'Arsenal', pg: 37, w: 17, l: 13, d: 8, points: 58 },
        {team: 'Leeds', pg: 37, w: 17, l: 15, d: 5, points: 56 },
        {team: 'Aston Villa', pg: 37, w: 15, l: 15, d: 7, points: 52 },
        {team: 'Wolves', pg: 37, w: 12, l: 16, d: 8, points: 45 },
        {team: 'Crystal Palace', pg: 37, w: 12, l: 17, d: 8, points: 44 },
        {team: 'Southampton', pg: 37, w: 12, l: 18, d: 7, points: 43 },
        {team: 'Newcastle', pg: 37, w: 11, l: 17, d: 9, points: 42 },
        {team: 'Brighton', pg: 37, w: 9, l: 14, d: 14, points: 41 },
        {team: 'Burnley', pg: 37, w: 10, l: 18, d: 9, points: 39 },
        {team: 'Fulham', pg: 37, w: 5, l: 19, d: 13, points: 28 },
        {team: 'West Brom', pg: 37, w: 5, l: 21, d: 11, points: 26 },
        {team: 'Sheff Utd', pg: 37, w: 6, l: 29, d: 2, points: 20 },
    ];

    window.onload = () => {
        loadTableData(teamData);
    }

    function loadTableData(teamData) {
        const tableBody = document.getElementById('tableData');
        let dataHtml = '';

        for (let team of teamData) {
            dataHtml += `<tr><td>${team.team}</td><td>${team.pg}<td>${team.w}<td>${team.l}<td>
                ${team.d}<td>${team.points}</td></tr>`;
        }

        tableBody.innerHTML = dataHtml;
    }


    function sortColumn(columnName) {
        const dataType = typeof teamData[0][columnName];
        console.log(dataType)
        sortDirection = !sortDirection;

        switch(dataType) {
            case 'number':
                sortNumberColumn(sortDirection, columnName);
                break;
        }

        loadTableData(teamData);

    }


    function sortNumberColumn(sort, columnName) {
        teamData = teamData.sort((p1, p2) => {
            return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
        });
    }

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

