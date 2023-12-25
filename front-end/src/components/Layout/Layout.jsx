import { Outlet } from "react-router-dom";
import { CartItemsProvider } from "../../contexts/CartItemsContext";
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
    <CartItemsProvider>
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
    </CartItemsProvider>
)