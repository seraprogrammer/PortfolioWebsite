const navMenuOne = document.getElementById("menu_icon_one");
const navMenuTwo = document.getElementById("menu_icon_two");
const menu_icon = document.getElementById("menu_icon");
const element = document.getElementById("element");
const showingSkill = document.getElementById("Skills_content_show");

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

const tabs = document.querySelectorAll("[data-tab-target]");
const contentItems = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    contentItems.forEach((content) => {
      // Changed variable name to contentItems
      content.classList.remove("active"); // Removed the dot before "active"
    });
    target.classList.add("active");
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.from("#about .about_me_eff", {
  scale: 0,
  opacity: 0,
  duration: 3, // Extended duration to 3 seconds
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    // markers: true,
    trigger: ".about_me_eff",
    scroller: "body",
    scrub: 1.2,
  },
});

gsap.from("#Skills_content .Skills_content_titlle", {
  scale: 0,
  opacity: 0,
  duration: 3, // Extended duration to 3 seconds
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    // markers: true,
    trigger: "#Skills_content .Skills_content_titlle",
    scroller: "body",
    scrub: 1.2,
  },
});

gsap.from("#Qualifications .Qualifications_tittle", {
  scale: 0,
  opacity: 0,
  duration: 3, // Extended duration to 3 seconds
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    // markers: true,
    trigger: "#Qualifications .Qualifications_tittle",
    scroller: "body",
    scrub: 1.2,
  },
});

gsap.from("#project .project_title", {
  scale: 0,
  opacity: 0,
  duration: 3, // Extended duration to 3 seconds
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    // markers: true,
    trigger: "#project .project_title",
    scroller: "body",
    scrub: 1.2,
  },
});

gsap.from("#Contact .Contact_title", {
  scale: 0,
  opacity: 0,
  duration: 3, // Extended duration to 3 seconds
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    // markers: true,
    trigger: "#Contact .Contact_title",
    scroller: "body",
    scrub: 1.2,
  },
});

gsap.from(".image.scroll-container .scroll-content", {
  scale: 0,
  opacity: 0,
  duration: 3,
  ease: "power3.out",
  stagger: 0.2,
  css: {
    transform: "translateX(-217px)",
  },
  scrollTrigger: {
    // markers: true,
    trigger: ".image.scroll-container", // Adjust the trigger selector
    scroller: "body",
    scrub: 1.2,
  },
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
