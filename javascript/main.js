window.onload = function () {
  const savedLanguage = localStorage.getItem("language") || "en";
  changeLanguage(savedLanguage); // Puedes usar 'en' para inglés si lo prefieres
};

function updateLanguageFlag(language) {
  const flag =
    language === "es" ? "images/flags/spain.png" : "images/flags/usa.png";
  document.getElementById("current-flag").src = flag;
}
function changeLanguage(language) {
  localStorage.setItem("language", language);

  updateLanguageFlag(language);

  // Actualiza los textos según el idioma seleccionado
  document.getElementById("greeting").innerText = translations[language].greeting;
  document.getElementById("title").innerText = translations[language].title;
  document.getElementById("description").innerText = translations[language].description;
  document.getElementById("know_me").innerText = translations[language].know_me;
  document.getElementById("projects").innerText = translations[language].projects;
  document.getElementById("contact").innerText = translations[language].contact;
  document.getElementById("contact_form").innerText = translations[language].contact_form;
  document.getElementById("follow_me").innerText = translations[language].follow_me;
  document.getElementById("about_me").innerText = translations[language].about_me;
  document.getElementById("about_me2").innerText = translations[language].about_me;
  document.getElementById("connect_me").innerText = translations[language].connect_me;
  document.getElementById("projects").innerText = translations[language].projects;
  document.getElementById("my_projects").innerText = translations[language].projects;
  document.getElementById("project1").innerText = translations[language].project+" 1";
  document.getElementById("project2").innerText = translations[language].project+" 2";
  document.getElementById("project3").innerText = translations[language].project+" 3";
  document.getElementById("description_project1").innerText = translations[language].description_project;
  document.getElementById("description_project2").innerText = translations[language].description_project;
  document.getElementById("description_project3").innerText = translations[language].description_project;
  document.getElementById("see_more1").innerText = translations[language].see_more;
  document.getElementById("see_more2").innerText = translations[language].see_more;
  document.getElementById("see_more3").innerText = translations[language].see_more;
  // document.getElementById("copyright").innerText = translations[language].copyright;
  document.getElementById("copyright").innerHTML = translations[language].copyright;

  document.getElementById("description_about").innerText = translations[language].description_about;
  document.getElementById("o").innerText = translations[language].o;
  document.getElementById("contact_me_directly").innerText = translations[language].contact_me_directly;
  document.getElementById('submit').innerText = translations[language].submit;
  document.getElementById('name').setAttribute('placeholder', translations[language].name);
  document.getElementById('email_placeholder').setAttribute('placeholder', translations[language].email_placeholder);
  document.getElementById('message').setAttribute('placeholder', translations[language].message);

  // Actualiza el estado visual de las banderas
  document
    .querySelectorAll(".dropdown-item")
    .forEach((el) => el.classList.remove("active-language"));
  document.getElementById(`lang-${language}`).classList.add("active-language");
}
