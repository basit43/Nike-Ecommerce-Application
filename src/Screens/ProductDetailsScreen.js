import { StyleSheet, Text ,View, Image, useWindowDimensions ,FlatList, ScrollView, Pressable } from "react-native";
import products from "../data/products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";
const ProductDetailsScreen = () => {
  const product = useSelector((state)=>state.products.selectedProduct);
  const {width} = useWindowDimensions();
  const dispatch = useDispatch();
  const addToCart = () =>{
    dispatch(cartSlice.actions.addcartItem({product: product}))
  }
  return (
    <View >
        <ScrollView>
      {/* Image Carousel */}
      <FlatList 
      data={product.images}
      renderItem= {({item})=>(
        <Image source={{uri: item}} style = {{width: width,
            aspectRatio: 1}} />
      )}
      horizontal
      showsHorizontalScrollIndicator = {false}
      pagingEnabled
      />
      {/* Title */}
      <Text style = {styles.title} >{product.name}</Text>
      {/* Price */}
      <Text style = {styles.price} >${product.price}</Text>
      {/* Description */}
      <Text style = {styles.description} >{product.description}</Text>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable onPress={addToCart} style = {styles.btnContainer} >
        <Text style = {styles.btnText} >Add to Cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
        paddingLeft: 15,
    },
    price: {
        fontWeight: "500",
        fontSize: 16,
        letterSpacing: 1.5,
        paddingLeft: 15,
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
        paddingLeft: 15,
    },
    btnContainer: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '45%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 100,
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    }
});

export default ProductDetailsScreen;