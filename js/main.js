//Selecting all the variables

const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_cases_element = document.querySelector(".recovered .value");
const new_recovered_cases_element = document.querySelector(".recovered .new-value");
const total_cases_element = document.querySelector(".deaths .value");
const new_cases_element = document.querySelector(".deaths .new-value");

const ctx = document.getElementById("axes_line_chart").getContext("2d");

//App variables

let app_data = [],
    cases_list = [],
    recovered_list = [],
    deaths_list = [],
    dates = [];