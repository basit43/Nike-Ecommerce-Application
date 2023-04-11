import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux'
import { selectDeliveryPrice, selectSubTotal, selectTotal } from '../store/cartSlice'
const ShoppinCartTotals = () =>{
    const SubTotal = useSelector(selectSubTotal)
    const DeliveryFee = useSelector(selectDeliveryPrice)
    const totalPrice = useSelector(selectTotal)
    return(
    <View style = {styles.totalContainer}>
            <View style = {styles.row}>
                <Text style = {styles.text} >SubTotal</Text>
                <Text style = {styles.text} >{SubTotal}</Text>
            </View>
            <View style = {styles.row}>
                <Text style = {styles.text} >Delivery</Text>
                <Text style = {styles.text} >$ {DeliveryFee}</Text>
            </View>
            <View style = {styles.row}>
                <Text style = {styles.textBold} >Total</Text>
                <Text style = {styles.textBold} >$ {totalPrice}</Text>
            </View>
        </View>
)}
const ShoppingCart = () => {
    const cartItem = useSelector((state)=>state.cart.item)
  return (
    <>
    <View  style = {styles.parent}>
      <FlatList 
      data={cartItem}
      renderItem={({item})=> <CartListItem cartItem={item} />}
      ListFooterComponent={ShoppinCartTotals}
      />
      <Pressable style = {styles.btn} >
        <Text style = {styles.btnText} >CheckOut</Text>
      </Pressable>
      </View>
      </>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
    parent: {
        height: '100%'
    },
    row: 
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    totalContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'grey',
        borderTopWidth: 1
    },
    text: {
        color: 'grey',
        fontSize: 16
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500'
    },
    btn: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 10,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    }
})