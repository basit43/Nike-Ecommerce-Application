import { FlatList, StyleSheet, Image, Pressable, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ProductSlice } from '../store/ProductSlice'
const ProductScreen = ({navigation}) => {

  const products = useSelector((state)=>state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList 
    data={products}
    renderItem={({item}) =>(
        <Pressable 
        onPress={()=>{
          //update the selected product
          dispatch(ProductSlice.actions.setSelectedProduct(item.id))
          navigation.navigate('Product Details')}} 
        style = {styles.itemContainer} ><Image source={{uri: item.image}} style = {styles.image1} /></Pressable>
    )}
    numColumns={2}
    />
  )
}
export default ProductScreen

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 1
    },
    image1: {
        width: '100%',
        aspectRatio: 1
    }
})