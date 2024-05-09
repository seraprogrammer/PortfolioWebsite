const navMenuOne = document.getElementById("menu_icon_one");
const navMenuTwo = document.getElementById("menu_icon_two");
const menu_icon = document.getElementById("menu_icon");
const element = document.getElementById("element");
const showingSkill = document.getElementById("Skills_content");

const header = document.getElementById("header");

let flg = 0;
menu_icon.addEventListener("click", () => {
  if (flg == 0) {
    header.style.left = "0%";
    navMenuOne.style.display = "none";
    navMenuTwo.style.display = "block";
    flg = 1;
  } else {
    header.style.left = "-100%";
    flg = 0;
    navMenuOne.style.display = "block";
    navMenuTwo.style.display = "none";
  }
});
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet("header ul li" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.9,
});
Shery.makeMagnet("svg" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.9,
});
Shery.makeMagnet(".s_icons ul li" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.9,
});

Shery.makeMagnet(".menu_icon" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.9,
});
Shery.makeMagnet(".name" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.9,
});
Shery.textAnimate(".name" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

ScrollReveal().reveal(".img", {
  delay: 375,
  duration: 500,
});

ScrollReveal().reveal(".hero_about", {
  delay: 375,
  duration: 500,
});
ScrollReveal().reveal(".skills", {
  delay: 375,
  duration: 500,
});
ScrollReveal().reveal(".about_me_eff", {
  delay: 375,
  duration: 500,
});
document.addEventListener("DOMContentLoaded", () => {
  async function fetchData(type = "skills") {
    try {
      const response = await fetch("skills.json"); // Await the fetch call
      const data = await response.json(); // Await the json parsing
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array in case of error
    }
  }

  // Call fetchData function to start fetching data
  fetchData().then((result) => {
    const formattedData = result
      .map(
        (skill) =>
          `<ul><li><p>${skill.name}</p>: <img src="${skill.icon}" alt="${skill.name} icon"></li></ul>`
      )
      .join("");
    showingSkill.innerHTML = formattedData;
    console.log(result);
  });
});

Shery.hoverWithMediaCircle(".img", {
  images: [
    "https://images.pexels.com/photos/45244/fire-match-flame-sulfur-45244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "image2.jpg",
    "image3.jpg",
  ] /*OR*/,
});
