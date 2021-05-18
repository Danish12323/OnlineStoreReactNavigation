import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  ScrollView,TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {

const AppButtonproduct = ({ onPress, title }) => (
  <TouchableOpacity 
  
  style={styles.custom}
  
   onPress={() => navigation.navigate('ManageProductsScreen')}
   >
    <Text style={styles.customcolor}>{title}</Text>
  </TouchableOpacity>
);


const AppButtonemployee = ({ onPress, title }) => (
  <TouchableOpacity 
  
  style={styles.custom}
    onPress={() => navigation.navigate('ManageEmployeesScreen')}
   >
    <Text style={styles.customcolor}>{title}</Text>
  </TouchableOpacity>
);


const AppButtonorder = ({ onPress, title }) => (
  <TouchableOpacity 
  
 style={styles.custom}
    onPress={() => navigation.navigate('ManageOrdersScreen')}
   >
    <Text style={styles.customcolor}>{title}</Text>
  </TouchableOpacity>
);








  return (
    <View style={styles.container}>
  <View style={styles.header}>
<Text style={styles.topheading}>Online Store</Text>
</View>
      <View style={styles.buttons}>

<View style={styles.custombtn}>
  <AppButtonproduct title="Manage Product" size="sm" backgroundColor="blue"
  
  style={styles.mybtn}
  
   />
</View>

<View style={styles.custombtn}>
<AppButtonemployee title="Manage Employee" size="sm" backgroundColor="blue"
  
  style={styles.mybtn}
  
   />
</View>
<View style={styles.custombtn}>
<AppButtonorder title="Manage Order" size="sm" backgroundColor="blue"
  
  style={styles.mybtn}
  
   />

</View>


      </View>
    </View>
  );
};
const ManageProductsScreen = ({ navigation }) => {
  const [getProductsList, setProductsList] = useState([
    {
      id: 1,
      img:
        'https://cmsimages.tribuneindia.com/gallary_content/2020/7/2020_7$largeimg_1727377222.jpeg',
      name: 'Fair n Lovely',
      price: '300',
      manufacturer: 'Ali',
      category: 'Cosmetics',
    },
    {
      id: 2,
      img:
        'https://i.pinimg.com/originals/30/1e/26/301e26a0b11c51be50b5b16131088527.jpg',
      name: 'Chocolate',
      price: '500',
      manufacturer: 'Abbas',
      category: 'Breakfast',
    },
    {
      id: 3,
      img:
        'https://5.imimg.com/data5/GF/GT/SK/SELLER-79616619/chocolate-chip-cookies-500x500.jpg',
      name: 'Yum Yum',
      price: '800',
      manufacturer: 'Zahid',
      category: 'Cookies',
    },
    {
      id: 4,
      img:
        'https://static1.buchi.com/sites/default/files/styles/content_large/public/application-note-images/swede-cakes-2123192_1920.jpg?itok=Fw1yHh8Q',
      name: 'Choco Bread',
      price: '900',
      manufacturer: 'Irfan',
      category: 'Bakery',
    },
  ]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.sView}>
        <View style={styles.slist}>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Image</Text>
            {getProductsList.map((item) => (
              <Text
                onPress={() =>
                  navigation.navigate('ProductDetailsScreen', {
                    id: item.id,
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    manufacturer: item.manufacturer,
                    category: item.category,
                  })
                }
                style={{ paddingTop: '15%', margin: 10 }}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: item.img,
                  }}
                />
                {'\n'}
              </Text>
            ))}
          </View>

          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Products</Text>
            {getProductsList.map((item) => (
              <Text
                onPress={() =>
                  navigation.navigate('ProductDetailsScreen', {
                    id: item.id,
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    manufacturer: item.manufacturer,
                    category: item.category,
                  })
                }
                style={{ paddingTop: '25%', height: '50%', margin: 10 }}>
                {item.name}
                {'\n'}
              </Text>
            ))}
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Price</Text>
            {getProductsList.map((item) => (
              <Text
                onPress={() =>
                  navigation.navigate('ProductDetailsScreen', {
                    id: item.id,
                    img: item.img,
                    name: item.name,
                    price: item.price,
                    manufacturer: item.manufacturer,
                    category: item.category,
                  })
                }
                style={{ paddingTop: '50%', height: '50%', margin: 10 }}>
                {item.price}
                {'\n'}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};
const ProductDetailsScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.sView}>
        <View style={styles.list}>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Id</Text>
            <Text style={{ margin: 10 }}>
              {route.params.id}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Image</Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: route.params.img,
              }}
            />
          </View>

          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Product Name</Text>
            <Text style={{ margin: 10 }}>
              {route.params.name}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Price</Text>
            <Text style={{ margin: 10 }}>
              {route.params.price}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Manufacturer</Text>
            <Text style={{ margin: 10 }}>
              {route.params.manufacturer}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Category</Text>
            <Text style={{ margin: 10 }}>
              {route.params.category}
              {'\n'}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Home" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
const ManageEmployeesScreen = ({ navigation }) => {
  const [getEmployeesList, setEmployeesList] = useState([
    {
      id: 1,
      name: 'Employee1',
      designation: 'Cashier',
      workingShift: 'Day',
      salary: '40000 RS',
    },
    {
      id: 2,
      name: 'Employee2',
      designation: 'Store Manager',
      workingShift: 'Day/Night',
      salary: '80000 RS',
    },
    {
      id: 3,
      name: 'Employee3',
      designation: 'Assistant Store Manager',
      workingShift: 'Day/Night',
      salary: '60000 RS',
    },
    {
      id: 4,
      name: 'Employee4',
      designation: 'Inventory Control Specialist',
      workingShift: 'Night',
      salary: '50000 RS',
    },
  ]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.sView}>
        <View style={styles.slist}>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>
              Employee Name
            </Text>
            {getEmployeesList.map((item) => (
              <Text
                onPress={() =>
                  navigation.navigate('EmployeeDetailsScreen', {
                    id: item.id,
                    name: item.name,
                    designation: item.designation,
                    workingShift: item.workingShift,
                    salary: item.salary,
                  })
                }
                style={{ margin: 10 }}>
                {item.name}
                {'\n'}
              </Text>
            ))}
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Designation</Text>
            {getEmployeesList.map((item) => (
              <Text
                onPress={() =>
                  navigation.navigate('EmployeeDetailsScreen', {
                    id: item.id,
                    name: item.name,
                    designation: item.designation,
                    workingShift: item.workingShift,
                    salary: item.salary,
                  })
                }
                style={{ margin: 10 }}>
                {item.designation}
                {'\n'}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};
const EmployeeDetailsScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.sView}>
        <View style={styles.list}>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Id</Text>
            <Text style={{ margin: 10 }}>
              {route.params.id}
              {'\n'}
            </Text>
          </View>

          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>
              Employee Name
            </Text>
            <Text style={{ margin: 10 }}>
              {route.params.name}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Designation</Text>
            <Text style={{ margin: 10 }}>
              {route.params.designation}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>
              Working Shift
            </Text>
            <Text style={{ margin: 10 }}>
              {route.params.workingShift}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Salary</Text>
            <Text style={{ margin: 10 }}>
              {route.params.salary}
              {'\n'}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Home" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};
const ManageOrdersScreen = ({ navigation }) => {
  const [getOrdersList, setOrdersList] = useState([
    {
      id: 1,
      orderNo: '1',
      productName: 'Fair n Lovely',
      price: '300 RS',
      customerInfo: 'Abbas',
      orderDate: '2020-12-18',
      shippingStatus: 'On Going',
    },
    {
      id: 2,
      orderNo: '2',
      productName: 'Morning Chocolate',
      price: '500 RS',
      customerInfo: 'Hamid',
      orderDate: '2020-12-18',
      shippingStatus: 'Delivered',
    },
    {
      id: 3,
      orderNo: '3',
      productName: 'Product3',
      price: '800 RS',
      customerInfo: 'Kamran',
      orderDate: '2020-12-18',
      shippingStatus: 'Delivered',
    },
    {
      id: 4,
      orderNo: '4',
      productName: 'Choco Bread',
      price: '900 RS',
      customerInfo: 'Rizwan',
      orderDate: '2020-12-18',
      shippingStatus: 'On Going',
    },
  ]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.sView}>
        <View style={styles.slist}>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Order No.</Text>
            {getOrdersList.map((item) => (
              <Text
                onPress={() =>
                  navigation.navigate('OrderDetailsScreen', {
                    id: item.id,
                    orderNo: item.orderNo,
                    productName: item.productName,
                    price: item.price,
                    customerInfo: item.customerInfo,
                    orderDate: item.orderDate,
                    shippingStatus: item.shippingStatus,
                  })
                }
                style={{ margin: 10 }}>
                {item.orderNo}
                {'\n'}
              </Text>
            ))}
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Product Name</Text>
            {getOrdersList.map((item) => (
              <Text
                onPress={() =>
                  navigation.navigate('OrderDetailsScreen', {
                    id: item.id,
                    orderNo: item.orderNo,
                    productName: item.productName,
                    price: item.price,
                    customerInfo: item.customerInfo,
                    orderDate: item.orderDate,
                    shippingStatus: item.shippingStatus,
                  })
                }
                style={{ margin: 10 }}>
                {item.productName}
                {'\n'}
              </Text>
            ))}
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Price</Text>
            {getOrdersList.map((item) => (
              <Text
                onPress={() =>
                  navigation.navigate('OrderDetailsScreen', {
                    id: item.id,
                    orderNo: item.orderNo,
                    productName: item.productName,
                    price: item.price,
                    customerInfo: item.customerInfo,
                    orderDate: item.orderDate,
                    shippingStatus: item.shippingStatus,
                  })
                }
                style={{ margin: 10 }}>
                {item.price}
                {'\n'}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};
const OrderDetailsScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView style={styles.sView}>
        <View style={styles.list}>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Id</Text>
            <Text style={{ margin: 10 }}>
              {route.params.id}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Order No.</Text>
            <Text style={{ margin: 10 }}>
              {route.params.orderNo}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Product Name</Text>
            <Text style={{ margin: 10 }}>
              {route.params.productName}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Price</Text>
            <Text style={{ margin: 10 }}>
              {route.params.price}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>
              Customer Info
            </Text>
            <Text style={{ margin: 10 }}>
              {route.params.customerInfo}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>Order Date</Text>
            <Text style={{ margin: 10 }}>
              {route.params.orderDate}
              {'\n'}
            </Text>
          </View>
          <View>
            <Text style={{ margin: 10, fontWeight: 'bold' }}>
              Shipping Status
            </Text>
            <Text style={{ margin: 10 }}>
              {route.params.shippingStatus}
              {'\n'}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Home" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}
       screenOptions={{ headerStyle: {backgroundColor:"lightblue"}} }>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageProductsScreen"
          component={ManageProductsScreen}
          options={{ title: 'Products', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{ title: 'Product Details', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="ManageEmployeesScreen"
          component={ManageEmployeesScreen}
          options={{ title: 'Employees', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="EmployeeDetailsScreen"
          component={EmployeeDetailsScreen}
          options={{ title: 'Employee Details', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="ManageOrdersScreen"
          component={ManageOrdersScreen}
          options={{ title: 'Orders', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="OrderDetailsScreen"
          component={OrderDetailsScreen}
          options={{ title: 'Order Details', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  slist: {
    marginBottom: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  list: {
    marginBottom: 3,
    flexDirection: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sView: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  buttons: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  mybtn:{
    backgroundColor:"blue",
    padding:5
  }
  ,custombtn:{
   color:"white" ,
   marginTop:10,
   
  },header:{
textAlign:"center",
backgroundColor:"black"
,width:"100%"


  },
  topheading:{
    paddingVertical:10,
    color:"white",
    fontWeight:600,

    
  }
  ,custom:{backgroundColor:"darkorange",color:"white",padding:10,width:"100%",textAlign:"center",
  borderRadius:50}
  ,customcolor:{
    color:"white"
  }
});

export default App;
