// sidebar nav function
const toggleOn = document.querySelector("#toggleBar-on");
const toggleOff = document.querySelector("#toggleBar-off");
const navbar = document.querySelector("aside");
const sideLi = document.querySelectorAll(".side-links li");
const productTitle = document.querySelectorAll(".product-title");
const productContainer = document.querySelectorAll(".product-container");
const arrow = document.querySelectorAll(".fa-solid");

toggleOn.addEventListener("click", () => {
  navbar.classList.add("active");
  navbar.inert = false;
  console.log("Sidebar opened");
});

toggleOff.addEventListener("click", () => {
  navbar.classList.remove("active");
  console.log("Sidebar closed");
  navbar.inert = true;
});

productTitle.forEach((product) => {
  product.addEventListener("click", () => {
    const productContainer = product.nextElementSibling;
    const arrow = product.querySelector("i");

    productContainer.classList.toggle("active");
    arrow.classList.toggle("active");
  });
});

// Template function
const template_item = document.querySelectorAll(".template-item");
const template_header = document.querySelectorAll(".template-header");
const template_title = document.querySelector(".title");
const template_drop = document.querySelector(".template-drop");
const data_container = document.querySelectorAll(".data-container");
const all_template_title = document.querySelector(".All-template");

const data = {
  contract: [
    "Free Contract Maker",
    "Social Media Management Contract Template",
    "Graphic Design Contract Template",
    "Digital Marketing Contract Template",
  ],
  proposal: [
    "Graphic Design Proposal Template",
    "Business Proposal Template",
    "Brand Ambassador Proposal Template",
    "Data Entry Proposal Letter Template",
  ],
  invoice: [
    "Social Media Invoice Templates",
    "Contractor Invoice Template",
    "Web Design Invoice Template",
    "Influencer Invoice Template",
  ],

  agreement: [
    "Influencer Agreement Template",
    "Influencer Collaboration Agreement Template",
    "Monthly Retainer Agreement Template",
    "Writer Agreement Template",
  ],

  quote: [
    "Web Design Quotation Template",
    "Interior Design Quotation Template",
    "Digital Marketing Quotation Template",
    "Video Production Quotation Template",
  ],

  "scope of work": [
    "Website Development Scope of Work Template",
    "Digital Marketing Scope of Work Template",
    "Consultant Scope of Work Template",
    "Interior Design Scope of Work Template",
  ],
  brief: [
    "Design Brief Template",
    "Architecture Design Brief",
    "Fashion Design Brief",
    "Creative Brief Template",
  ],
};

// console.log(data);

template_item.forEach((item, index) =>
  item.addEventListener("mouseenter", () => {
    template_title.textContent = template_header[index].textContent;

    const key = template_header[index].textContent.toLowerCase();

    if (key in data) {
      // Check whether this is the last category in the data object
      const objectIndex = Object.keys(data).indexOf(key);
      const lastObjectIndex = Object.keys(data).length - 1;

      if (objectIndex === lastObjectIndex) {
        all_template_title.style.display = "none";
      } else {
        all_template_title.style.display = "";
      }

      for (let i = 0; i < data_container.length; i++) {
        data_container[i].textContent = data[key][i] || "";
      }
    } else {
      console.log("not working:", key);
    }
  }),
);

// Store the default content
const defaultTitle = template_title.textContent;
const defaultCards = [...data_container].map((item) => item.textContent);

// Restore defaults when mouse leaves the dropdown
template_drop.addEventListener("mouseleave", () => {
  template_title.textContent = defaultTitle;

  data_container.forEach((item, index) => {
    item.textContent = defaultCards[index];
  });

  all_template_title.style.display = "";
});

// <!-- PRICE-SECTION -->

const checkbox = document.querySelector("#checkbox");
const prices = document.querySelectorAll(".price");
const yearly = document.querySelectorAll(".billed-yearly");

const monthlyPrices = [24, 39, 79];
const yearlyPrices = [17, 32, 52];

checkbox.addEventListener("change", () => {
  prices.forEach((price, index) => {
    price.textContent = checkbox.checked
      ? yearlyPrices[index]
      : monthlyPrices[index];
  });

  yearly.forEach((year) => {
    year.style.display = checkbox.checked ? "block" : "none";
  });
});

// SECTION-THREE-PART

const listDiv = document.querySelectorAll(".list-div");
const angleDown = document.querySelectorAll(".list-div-angle");

listDiv.forEach((li) => {
  li.addEventListener("click", () => {
    const paraDiv = li.closest("li").querySelector(".para-div");
    const angleDown = li.querySelector(".list-div-angle");

    paraDiv.classList.toggle("showDiv");

    angleDown.style.transform = paraDiv.classList.contains("showDiv")
      ? "rotate(-180deg)"
      : "rotate(0deg)";
  });
});

// Footer section

// Templates

const templatesUl = document.querySelector(".templates > ul");

const listItems = templatesUl.querySelectorAll(":scope > li");

listItems.forEach((li) => {
  li.addEventListener("click", () => {
    const nestedUl = li.querySelector(":scope > ul");

    if (nestedUl) {
      nestedUl.classList.toggle("show-templates-ul");
    }
  });
});

//Bonsai

const bonsaiParent = document.querySelector(".bonsai-ul");
const bonsaiChild = document.querySelector(".bonsai-ul-child");

bonsaiParent.addEventListener("click", () => {
  bonsaiChild.classList.toggle("show-ul");
});
