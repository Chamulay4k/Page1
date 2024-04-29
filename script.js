function moverBotao() {
    var button = document.getElementById("nao");
    var pedidoBox = document.querySelector(".pedido-box");
    var pedidoBoxRect = pedidoBox.getBoundingClientRect();

    var randomX = Math.random() * (pedidoBoxRect.width - button.offsetWidth);
    var randomY = Math.random() * (pedidoBoxRect.height - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function redirecionarParaVideo() {
    window.location.href = "https://celebrated-snickerdoodle-c7d5a1.netlify.app";
}