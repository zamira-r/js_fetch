const body = document.body;
let url = "https://api.github.com/users/zamira-r";

const showInfo = async () => {
    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();

      console.log(typeof(url));
      let name = document.createElement('h1');
      if (json.name != null){
        name.innerHTML = json.name;
      } else {
        name.innerHTML = "Имя не указано"
      }

      body.append(name);
      name.addEventListener("click", () => window.location = json.html_url);

      let bio = document.createElement('p');
      if (json.bio!=null){
        bio.innerHTML = json.bio;
      } else {
        bio.innerHTML = "Информация о пользователе недоступна";
      }
      body.append(bio)

      let photo = new Image();
      photo.src = await json.avatar_url;
      body.append(photo);
    } else {
      alert("Информация о пользователе недоступна");
  }
}

showInfo();
