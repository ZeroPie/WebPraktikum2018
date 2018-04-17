import { init } from "./components/startseite/startseite";
import "./components/startseite/startseite.scss";
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import Flickity from 'flickity';
import Swiper from 'swiper';
import login from "./components/login/login.html"

function load_home() {
    
}

let loginButton = document.getElementById('login');
loginButton.addEventListener ('click', goToLoginPage, false);

function goToLoginPage() {
    document.getElementById("cta").innerHTML='<object type="text/html" data="home.html" ></object>';
    //location.href = "http://borgdir.media/web/login/index.html";
} 
