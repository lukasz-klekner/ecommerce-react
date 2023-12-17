import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import COVER_IMG from "../../assets/cover.jpeg"

export const MainPage = () => (
    <Layout>
        <Hero heroImgUrl={COVER_IMG} />
    </Layout>
)