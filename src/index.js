import { init } from "./components/startseite/startseite";
import "./components/startseite/startseite.scss";
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import Flickity from 'flickity';
import Swiper from 'swiper';

let loginButton = document.getElementById('loginButton');
loginButton.addEventListener ('click', goToLoginPage, false);

function goToLoginPage() {
    //location.href = "http://borgdir.media/web/login/index.html";
} 