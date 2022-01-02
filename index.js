import "./index.scss";

console.log("bite")

const section = document.querySelector(".div-info-contact")
console.log(section)

const btn = document.querySelector(".btn-contact")
console.log(btn)
btn.addEventListener("click", event => {

    section.innerHTML = `
    <form>
    <span class="mail"><i class="fas fa-envelope"></i>oui c .un mail@gmail.com</span>
    <span class="insta"><a href="#"></a><i class="fab fa-linkedin"></i>Linkedin</a></span>
    <span class="insta"><a href="https://www.instagram.com/nextfor.dev/"><i class="fab fa-instagram"></i>Instagram</a></span>
    <span class="discord"><a href="https://discord.gg/fntMgg7"><i class="fab fa-discord"></i>Discord</a></span>
    <span class="twitter"><a href="https://twitter.com/nextfordev"><i class="fab fa-twitter"></i>Twitter</a></span>
    <span class="reddit"><a href="https://www.reddit.com/r/jojoz"><i class="fab fa-reddit"></i>Reddit</a></span>
    <form action="">
    <p>Pour que je vous recontact :</p>
    <select name="my-select" id="envoiemail">
    <option value="opt1">Applications</option>
    <option value="opt1">Produits</option>
    <option value="opt2">Demande ou conseil</option>
    <option value="opt3">Autres</option>
    </select>
    <input type="text">
    <button>Envoyer</button>
    </form>
`
})

