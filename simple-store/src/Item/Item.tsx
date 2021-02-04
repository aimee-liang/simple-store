import Button from "@material-ui/core/Button"
import {CartItemType} from "../App"
import {Wrapper} from "./Item.styles"

type Props = {
    item: CartItemType
    handleAddToCart: (clicked: CartItemType) => void
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {
    <Wrapper>
        <img src={item.image} alt={item.title} />
    </Wrapper>
}