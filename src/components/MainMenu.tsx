import { NavLink } from "react-router-dom";
import { MainMenuConteiner } from "../styles/MainMenuContainer";



export const MainMenu = () => (
    <MainMenuConteiner>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">Sobre</NavLink></li>
        </ul>
    </MainMenuConteiner>
)