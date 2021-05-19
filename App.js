import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, Pressable, TouchableOpacity, ScrollView, Image,Button } from 'react-native';
import Constants from 'expo-constants';








const homescreen = ({ navigation }) => {
  return(
    <View style = {{backgroundColor: 'white', height: '100%'}}>

    <View style={styles.container}>
    <TouchableOpacity  style={styles.custombutton} onPress={() => navigation.navigate("Allproducts")}>
      <Text style= {styles.custombtntext}> MANAGE PRODUCTS </Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.custombutton} onPress={() => navigation.navigate("Allemployees")}>
      <Text style= {styles.custombtntext}> MANAGE EMPLOYERS </Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.custombutton} onPress={() => navigation.navigate("Allorders")}>
      <Text style= {styles.custombtntext}> MANAGE ORDERS </Text>
      </TouchableOpacity>

    </View>
      
    </View>
  );
}
const Allproducts = ( { navigation } ) =>{
 const [list, setlist] = useState([
    {
     id: 1,
      img:
        'https://cmsimages.tribuneindia.com/gallary_content/2020/7/2020_7$largeimg_1727377222.jpeg',
      name: 'Fair n Lovely',
      price: '300',
      category: 'Cream',
    },
     {
     id: 2,
      img:
        'https://i.pinimg.com/originals/30/1e/26/301e26a0b11c51be50b5b16131088527.jpg',
      name: 'Chocolate',
      price: '500',
      category: 'Breakfast',
    },
     {
      id: 3,
      img:
        'https://5.imimg.com/data5/GF/GT/SK/SELLER-79616619/chocolate-chip-cookies-500x500.jpg',
      name: 'Yum Yum',
      price: '800',    
      category: 'Cookies',
    },
 ]);
  return( 
     <View style = {{backgroundColor: 'white', height: '100%'}}>
     <View> 
            <View style= {styles.columns}> 
            <Text style={styles.columnheader}> Image </Text>
            <Text style={styles.columnheader}> Name </Text>
            <Text style={styles.columnheader}> Price </Text>
             </View>
      </View> 
    <ScrollView> 
      <View> 
      <View> 
          {
            list.map((item) => 
            <View  style={ styles.columns}> 
            <Text
             onPress = {() =>
              navigation.navigate('productedetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                price: item.price,
                category: item.category
              })
            }> <Image style={styles.myimage} source={{ uri: item.img }} /> </Text> 
            <Text style= {{lineHeight: 55}}
            onPress = {() =>
              navigation.navigate('productdetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                price: item.price,
                category: item.category
              })
            }
            > {item.name} </Text>
            <Text style= {{lineHeight: 55}}
            onPress = {() =>
              navigation.navigate('productdetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                price: item.price,
                category: item.category
              })
            }
            > {item.price} </Text>
             </View>
            ) 
          }
      </View> 
      </View>  
    </ScrollView>
    </View>
  );
}




const productdetails = ( { navigation, route } ) =>{

  return(
    <View style = {{backgroundColor: 'white', height: '100%'}}> 
       <Image style={styles.titleimage} source={{ uri: route.params.img}} /> 

       <View style={styles.detailrow}>
       <Text> Product ID:  {route.params.id} </Text> 
       <Text> Name: {route.params.name} </Text> 
       </View> 

      <View  style={styles.detailrow} > 
      <Text> Price: {route.params.price} </Text> 
       <Text> Category: {route.params.category} </Text> 
      </View>
    </View>
  );
}


const Allemployees = ( {navigation }) =>{
  const[list, setlist] = useState([
     {
      id: 1,
      img:
        'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg',
      name: 'Danish',
      salary: '50000',
      designation: 'Manager',
      shift: 'Day',
    },
     {
      id: 2,
      img:
        'https://cdn2.vectorstock.com/i/1000x1000/41/11/flat-business-woman-user-profile-avatar-icon-vector-4334111.jpg',
      name: 'Malaika',
      salary: '100000',
      designation: 'Manager',
      shift: 'Day',
    },
     {
      id: 3,
      img:
        'https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png',
      name: 'Maleeka',
      salary: '20000',
      designation: 'Manager',
      shift: 'Day',
    },
  ]);
  return(
      <View style = {{backgroundColor: 'white', height: '100%'}}>
     <View> 
            <View style= {styles.columns}> 
            <Text style={styles.columnheader}> Image </Text>
            <Text style={styles.columnheader}> Name </Text>
            <Text style={styles.columnheader}> Salary </Text>
             </View>
      </View> 
    <ScrollView> 
      <View> 

      <View> 
          {
            list.map((item) => 
            <View  style={styles.columns}> 
            <Text
             onPress = {() =>
              navigation.navigate('employeedetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                salary: item.salary,
                shift: item.shift,
                designation: item.designation
              })
            }> <Image style={styles.myimage} source={{ uri: item.img }} /> </Text> 
            <Text style= {{lineHeight: 55}}
            onPress = {() =>
              navigation.navigate('employeedetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                salary: item.salary,
                shift: item.shift,
                designation: item.designation
              })
            }
            > {item.name} </Text>
            <Text style= {{lineHeight: 55}}
            onPress = {() =>
              navigation.navigate('employeedetails', {
                id: item.id, 
                img: item.img,
                name: item.name,
                salary: item.salary,
                shift: item.shift,
                designation: item.designation
              })
            }
            > {item.salary} </Text>
             </View>
            ) 
          }
      </View> 
      </View>  
    </ScrollView>
    </View>
  ); 
}


const employeedetails = ({navigation, route}) => {
  return(
     <View style = {{backgroundColor: 'white', height: '100%'}}> 
       <Image style={styles.titleimage} source={{ uri: route.params.img}} /> 

       <View style={styles.detailrow}>
       <Text> Employee ID:  {route.params.id} </Text> 
       <Text> Name: {route.params.name} </Text> 
       </View> 

      <View  style={styles.detailrow} > 
      <Text> salary: {route.params.salary} </Text> 
       <Text> Designation: {route.params.designation} </Text> 
      </View>

        <Text  style={styles.detailrow}> shift: {route.params.shift} </Text> 
    </View>
  );
}
const Allorders =({navigation}) => {
  const[list, setlist] = useState([
     {
      id: 1,
      product: 'Fair Lovely',
      price: 200,
      customer: 'Danish',
    },
     {
      id: 2,
      product: 'Cake',
      price: 200,
      customer: 'Danish',
    },
     {
      id: 3,
      product: 'Choco',
      price: 200,
      customer: 'Danish',
    },
  ]);
  
return(
      <View style = {{backgroundColor: 'white', height: '100%'}}>
     <View> 
            <View style= {styles.columns}> 
            <Text style={styles.columnheader}> ID </Text>
            <Text style={styles.columnheader}> Product </Text>
            <Text style={styles.columnheader}> Bill </Text>
             </View>
      </View> 
    <ScrollView> 
      <View> 

      <View> 
          {
            list.map((item) => 
            <View  style={styles.columns}> 
            <Text
             onPress = {() =>
              navigation.navigate('orderdetails', {
                id: item.id, 
                product: item.product,
                customer: item.customer,
                price: item.price,
              })
            }> {item.id} </Text> 
            <Text 
            onPress = {() =>
              navigation.navigate('orderdetails', {
                 id: item.id, 
                product: item.product,
                customer: item.customer,
                price: item.price,
              })
            }
            > {item.product} </Text>
            <Text
            onPress = {() =>
              navigation.navigate('orderdetails', {
                id: item.id, 
                product: item.product,
                customer: item.customer,
                price: item.price,
              })
            }
            > {item.price} </Text>
             </View>
            ) 
          }
      </View> 
      </View>  
    </ScrollView>
    </View>
  ); 
}
const orderdetails =({navigation, route }) =>{
   return(
    <View style = {{backgroundColor: 'white', height: '100%'}}> 

       <View style={styles.detailrow}>
       <Text> Product ID:  {route.params.id} </Text> 
       <Text> Product: {route.params.product} </Text> 
       </View> 

      <View  style={styles.detailrow} > 
      <Text> Customer: {route.params.customer} </Text> 
       <Text> Bill: {route.params.price} </Text> 
      </View>
    </View>
  );

}









const Stack = createStackNavigator();
export default function App(){
  return(
    <View style={styles.container}>

<NavigationContainer>

<Stack.Navigator  initialRouteName={"home"}> 
          <Stack.Screen
          name="home"
          component={homescreen}
          options={{ title: 'Online Store', headerTitleAlign: 'center' }}
        /> 

 <Stack.Screen
          name = "Allproducts"
          component={Allproducts}
          options={{ title: 'Our Products', headerTitleAlign: 'center' }}
        />


<Stack.Screen 
          name = 'productdetails'
          component = {productdetails}
           options={{ title: 'Product Detail', headerTitleAlign: 'center' }} />

  <Stack.Screen 
          name = "Allemployees"
          component = {Allemployees}
          options={{ title: 'Our Employees', headerTitleAlign: 'center' }} 
        />

<Stack.Screen
          name = "employeedetails"
          component = {employeedetails}
          options={{ title: 'Employee Detail', headerTitleAlign: 'center' }} 
        />


 <Stack.Screen
        name= "Allorders"
        component = {Allorders}
        options={{ title: 'Orders Placed', headerTitleAlign: 'center' }} 
        />
<Stack.Screen
        name= "orderdetails"
        component = {orderdetails}
        options={{ title: 'Orders Details', headerTitleAlign: 'center' }} 
        />

      </Stack.Navigator>




</NavigationContainer>





    </View>

  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FF9393",
  },
  custombutton:{
    marginTop: 15, 
    marginBottom: 15,
    alignItems: 'center',
  },
  custombtntext: {
    color: 'white',
    backgroundColor: '#DB2929',
    padding: 20,
    borderRadius: 50,
  },
   columns: {
    flexDirection: 'row',
    justifyContent:"space-between",
    padding: 15,
    alignItems:"center"
    
  }, 
  columnheader: {
    fontWeight: 'bold',
    lineHeight: 30,

  } ,myimage: {
    width: 50,
    height: 50,
  },
  titleimage: {
    width: '100%',
    height: 220,
  },
  detailrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  }
});


