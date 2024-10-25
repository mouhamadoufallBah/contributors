async function loadProfiles() {
  const container = document.getElementById("profiles-container");
  try {
    const response = await fetch("./data/profiles.json");
    const profiles = await response.json();

    profiles.forEach((profile) => {
      const card = document.createElement("div");
      card.classList.add("profile-card");

      card.innerHTML = `
              <img src="${profile.image}" alt="${profile.name}">
              <h3>${profile.name}</h3>
              <p>${profile.bio}</p>
              <div class="skills"><strong>Skills:</strong> ${profile.skills.join(
                ", "
              )}</div>
              <a href="${profile.github}" target="_blank">GitHub Profile</a>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading profiles:", error);
  }
}

loadProfiles();
