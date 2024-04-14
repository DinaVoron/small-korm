function onEntry(entry) {
    entry.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("elementShown");
        } else {
            element.target.classList.remove("elementShown");
        }
    });
}


let options = {treshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.getElementsByClassName("elementAnimation");

for (let i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
}