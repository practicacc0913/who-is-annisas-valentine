
window.onload = () => {
    loadProfiles();
}

const measurement_id = `G-8LLQ3459GG`;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', measurement_id);

// goes through array of personalities in test.js and loads images
function loadProfiles(element) {
    const mbti = Object.keys(personalities);
    mbti.forEach(personality => {
        const vehicle = personalities[personality];
        const profile_container = document.createElement("div");
        profile_container.setAttribute("class", "profile");

        const profile_img = document.createElement("img");
        profile_img.setAttribute("src", "img/profiles/" + vehicle + ".PNG");
        profile_img.setAttribute("alt", vehicle);

        const profile_txt = document.createElement("p");
        profile_txt.innerText = vehicle;
        profile_txt.setAttribute("class", "caption");

        profile_container.appendChild(profile_img);
        profile_container.appendChild(profile_txt);

        const gallery = document.getElementById("gallery");
        gallery.appendChild(profile_container);
    });
}