import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Layout } from "../../components/Layout/Layout";

export const ProductsList = () => (
    <Layout>
        <FlexContainer>
            <ExpandableMenu />
            <Breadcrumbs />
        </FlexContainer>
    </Layout>
)