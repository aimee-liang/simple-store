import {useState} from "react"
import {useQuery} from "react-query"
import Item from "./Item/Item"
import Drawer from "@material-ui/core/Drawer"
import LinearProgress from "@material-ui/core/LinearProgress"
import Grid from "@material-ui/core/Grid"
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
import Badge from "@material-ui/core/Badge"
import {Wrapper, StyledButton} from "./App.styles"

export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

const fetchProducts = async (): Promise<CartItemType[]> => 
  await (await fetch("https://fakestoreapi.com/products")).json()


const App = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products', 
    fetchProducts
    )
    // console.log(data)

    const getTotalItems = (items: CartItemType[]) => items.reduce((acc: number, item) => acc + item.amount, 0)

    const handleAddToCart = (clickedItem: CartItemType) => null

    const handleRemoveFromCart = () => null

    if (isLoading) return <LinearProgress/>
    if (error) return <div>Something's wrong!</div>

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose = {() => setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <StyledButton onClick={()=> setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item => (
          <Grid item key = {item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        )))}
      </Grid>
    </Wrapper>
    );
}

export default App;
