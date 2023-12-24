import { Outlet } from "react-router-dom";
import { CurrencyProvider } from "../../contexts/CurrencyContext";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { IconMenu } from "../IconMenu/IconMenu";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu";
import { TopBar } from "../TopBar/TopBar";

export const Layout = () => (
    <CurrencyProvider>
        <MainContent>
            <TopBar>
                <MainMenu />
                <Logo />
                <div>
                    <CurrencySelector />
                    <IconMenu />
                </div>
            </TopBar>
            <CategoryMenu />
            <Outlet />
        </MainContent>
        <Footer/>
    </CurrencyProvider>
)