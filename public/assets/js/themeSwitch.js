$("#colorSwitch").click(e => {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "color");
    } else {
        document.documentElement.setAttribute("data-theme", "retro");
    }
});