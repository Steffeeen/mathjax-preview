document.addEventListener("DOMContentLoaded", () => {
    render();
    document.querySelector("#input").addEventListener("input", () => {
        render();
    });
    window.addEventListener("resize", () => {
        render();
    });
});

function render() {
    let input = document.querySelector("#input");
    document.querySelector("#output").innerHTML = `$$ ${input.value} $$`;
    MathJax.Hub.Typeset();
}
