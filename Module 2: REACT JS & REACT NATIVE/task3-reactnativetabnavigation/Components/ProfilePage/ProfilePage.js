import React from 'react'
import { Text, Image, StyleSheet, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { UserStories } from "../UserStories/UserStories";

function ProfilePage({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <TouchableOpacity>
          <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 23 }}>user123<MaterialIcons name="arrow-drop-down" size={24} color="black" /></Text>
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <FontAwesome name="plus-square-o" size={25} color="black" style={styles.icons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons name="menu" size={22} color="black" style={styles.icons} onPress={() => navigation.openDrawer()}/>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>

          {/* LEFT SIDE */}
          <View style={styles.profileheader}>
            <TouchableOpacity style={styles.profilepic}>
              <FontAwesome name="users" size={55} color="white" style={{ margin: 10 }} />
            </TouchableOpacity>
            <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>user123</Text>
            <Text style={{ marginLeft: 10, fontWeight: '100', color: 'gray' }}>Photographer</Text>
          </View>

          {/* RIGHT SIDE */}
          <View alignItems='center'>
            <Text style={{ fontWeight: 'bold',fontSize: 20 }}>100</Text>
            <Text style={{fontSize: 15 }}>Posts</Text>
          </View>

          <View alignItems='center'>
            <Text style={{ fontWeight: 'bold',fontSize: 20 }}>1K</Text>
            <Text style={{fontSize: 15 }}>Followers</Text>
          </View>

          <View alignItems='center'>
            <Text style={{ fontWeight: 'bold',fontSize: 20 }}>500</Text>
            <Text style={{fontSize: 15 }}>Following</Text>
          </View>
        </View>

        {/* MIDDLE BUTTONS  */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
          <TouchableOpacity style={{ width: '95%', borderWidth: 1, borderRadius: 5, borderColor: 'gray', alignItems: 'center', marginHorizontal: 10, paddingVertical: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{ width: '28%', borderWidth: 1, borderRadius: 5, borderColor: 'gray', alignItems: 'center', marginHorizontal: 5, paddingVertical: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Ad tools</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '28%', borderWidth: 1, borderRadius: 5, borderColor: 'gray', alignItems: 'center', marginHorizontal: 5, paddingVertical: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Insights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: '28%', borderWidth: 1, borderRadius: 5, borderColor: 'gray', alignItems: 'center', marginHorizontal: 5, paddingVertical: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>Contact</Text>
          </TouchableOpacity>
        </View>

        {/* STORY HIGHTLIGHTS */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>Story Hightlights</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </View>

        {/* UPLOADED POSTS */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 10, borderBottomWidth: 1, marginHorizontal: 80 }}>
          <Ionicons name="apps-outline" size={25} color="black" />
        </View>

        {/* POSTS */}
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white'}} source={require('../HomePage/postimage.jpg')}>
          </Image>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
          <Image
            style={{ width: '33%', height: 100 , borderWidth: 1, borderColor: 'white' }} source={require('../HomePage/postimage.jpg')}>
          </Image>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    height: '8%'
  },
  profilepic: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#fd5740',
    backgroundColor: 'gray',
    marginTop: 10,
    marginBottom: 10,

  },
  iconsContainer: {
    flexDirection: 'row'
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 10
  },
  icons: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: 10
  }
})

export default ProfilePage;

