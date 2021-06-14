const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const bigTitle = document.querySelector(".cta-text h1")
bigTitle.textContent = siteContent["cta"]["h1"]

const bigImg = document.querySelector("#cta-img")
bigImg.setAttribute('src', siteContent["cta"]["img-src"])

const btnGet = document.querySelector(".cta-text button")
btnGet.textContent = siteContent["cta"]["button"]

const menus = document.querySelectorAll("nav a")[0]
menus.textContent = siteContent["nav"]["nav-item-1"]

const menus1 = document.querySelectorAll("nav a")[1]
menus1.textContent = siteContent["nav"]["nav-item-2"]

const menus2 = document.querySelectorAll("nav a")[2]
menus2.textContent = siteContent["nav"]["nav-item-3"]

const menus3 = document.querySelectorAll("nav a")[3]
menus3.textContent = siteContent["nav"]["nav-item-4"]

const menus4 = document.querySelectorAll("nav a")[4]
menus4.textContent = siteContent["nav"]["nav-item-5"]

const menus5 = document.querySelectorAll("nav a")[5]
menus5.textContent = siteContent["nav"]["nav-item-6"]

const feature = document.querySelectorAll(".text-content h4")[0]
feature.textContent = siteContent["main-content"]["features-h4"]

const featureContent = document.querySelectorAll(".top-content .text-content p")[0]
featureContent.textContent = siteContent["main-content"]["features-content"]


const about = document.querySelectorAll(".text-content h4")[1]
about.textContent = siteContent["main-content"]["about-h4"]

const aboutContent = document.querySelectorAll(".text-content p")[1]
aboutContent.textContent = siteContent["main-content"]["about-content"]

const servicesTitle = document.querySelectorAll(".text-content h4")[2]
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

const serviceContent = document.querySelectorAll(".text-content p")[2]
serviceContent .textContent = siteContent["main-content"]["services-content"]

const productTitle = document.querySelectorAll(".text-content h4")[3]
productTitle.textContent = siteContent["main-content"]["product-h4"]

const productContent = document.querySelectorAll(".text-content p")[3]
productContent .textContent = siteContent["main-content"]["product-content"]

const vissionTitle = document.querySelectorAll(".text-content h4")[4]
vissionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visionContent = document.querySelectorAll(".text-content p")[4]
visionContent .textContent = siteContent["main-content"]["vision-content"]

const midImage = document.querySelector(".middle-img")
midImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const contacts = document.querySelector(".contact h4")
contacts.textContent = siteContent["contact"]["contact-h4"]

const addresses = document.querySelectorAll(".contact p")[0]
addresses.textContent = siteContent["contact"]["address"]

const mobile = document.querySelectorAll(".contact p")[1]
mobile.textContent = siteContent["contact"]["phone"]

const Email = document.querySelectorAll(".contact p")[2]
Email.textContent = siteContent["contact"]["email"]

const footers = document.querySelector("footer p")
footers.textContent = siteContent["footer"]["copyright"]



