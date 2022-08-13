setInterval(() => {
    let imgs = document.querySelectorAll("img");
    let h_3s = document.querySelectorAll("h3");

    h_3s.forEach((h, i) => {
        h.textContent = "승현이 바보";
    });

    imgs.forEach((a, i) => {
        a.src =
            "https://raw.githubusercontent.com/Ohgyuchan/pepe_extension/main/pepe.png";
    });
}, 500);
