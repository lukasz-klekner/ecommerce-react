import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { useCartItems } from "../../contexts/CartItemsContext";

export const Cart = () => {
  const [cartItems] = useCartItems()

  return (
    <FlexContainer>
        <CartProductsList products={cartItems}/>
        <CartSummary products={cartItems}/>
    </FlexContainer>
)
} 