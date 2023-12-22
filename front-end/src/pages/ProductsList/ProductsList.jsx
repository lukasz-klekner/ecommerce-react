import { Products } from "../../components/Products/Products";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

export const ProductsList = () => {
    const products = useLoaderData()
    const { category } = useParams()

    const foundCategory = CATEGORIES.find(({  path }) => path === category).categoryName

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div>
                <Breadcrumbs />
                <Products products={products} headerText={foundCategory} />
                <Pagination numberOfPages={5} />
            </div>
        </FlexContainer>
    )
}
