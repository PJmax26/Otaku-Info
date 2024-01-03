"use strict";
const generateBtn = document.querySelector(".generate_btn");
// const category = document.querySelector(".category");
// const userQuery = document.querySelector(".user_query");

let page = 0;
let url = "";
// const categoryValue = category.value;

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://10000-anime-quotes-with-pagination-support.p.rapidapi.com/rapidHandler/recent?page=${page}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5a85b87145msh7ddccc599c3d792p19739ejsndbb1874d084e",
          "X-RapidAPI-Host":
            "10000-anime-quotes-with-pagination-support.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

generateBtn.addEventListener("click", () => {
  page++;
  const showData = async () => {
    const jsonData = await fetchData();
    console.log(jsonData);
  };

  showData();
});

// generateBtn.addEventListener("click", () => {
//   const categoryValue = category.value;
//   let url;
//   if (!userQuery.value && categoryValue === "random") {
//     url =
//       "https://10000-anime-quotes-with-pagination-support.p.rapidapi.com/rapidHandler/recent?page=1";
//   } else if (categoryValue === "anime") {
//     url = `https://10000-anime-quotes-with-pagination-support.p.rapidapi.com/rapidHandler/search_by_anime?page=1&search=${userQuery.value}`;
//   } else if (categoryValue === "character") {
//     url = `https://10000-anime-quotes-with-pagination-support.p.rapidapi.com/rapidHandler/search_by_character?page=1&search=${userQuery.value}`;
//   }

//   const showData = async () => {
//     const response = await fetch(url, {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "5a85b87145msh7ddccc599c3d792p19739ejsndbb1874d084e",
//         "X-RapidAPI-Host":
//           "10000-anime-quotes-with-pagination-support.p.rapidapi.com",
//       },
//     });
//     const jsonData = await response.json();
//     console.log(jsonData);
//   };

//   showData();
// });

// https://restcountries.com/v3.1/name/{name}
// https://api.jikan.moe/v4/anime?q=Naruto&sfw
