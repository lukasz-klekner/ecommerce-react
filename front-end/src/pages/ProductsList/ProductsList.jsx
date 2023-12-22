import { Products } from "../../components/Products/Products";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { Pagination } from "../../components/Pagination/Pagination";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

export const ProductsList = () => {
    const {products, numberOfPages } = useLoaderData()
    const { category, subcategory } = useParams()

    const foundCategory = CATEGORIES.find(({  path }) => path === category)

    let foundSubcategory;

    if(subcategory){
        foundSubcategory = foundCategory.subcategories?.find(({ path }) => path === subcategory)
    }

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div>
                <Breadcrumbs />
                <Products 
                    products={products} 
                    headerText={foundSubcategory ? foundSubcategory.categoryName : foundCategory.categoryName} 
                />
                <Pagination numberOfPages={numberOfPages} />
            </div>
        </FlexContainer>
    )
}
