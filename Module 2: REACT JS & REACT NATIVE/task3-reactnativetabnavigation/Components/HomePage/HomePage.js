import React from 'react'
import { Text, Image, StyleSheet, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { UserStories } from "../UserStories/UserStories";

function HomePage({ navigation }) {
  return (
    <>
      {/* HEADER */}
      <View style={styles.header}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <TouchableOpacity>
          <Image
            style={styles.logo} source={require('../HomePage/logo.png')}>
          </Image>
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <FontAwesome5 name="facebook-messenger" size={25} color="black" style={styles.icons} />
          </TouchableOpacity>
        </View>
      </View>

      {/* STORIES */}
      <View style={styles.stories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {UserStories.map((story, index) => (
            <TouchableOpacity style={{ marginTop: 10 }}>
              <View key={index} style={{ alignItems: 'center' }}>
                <Image
                  style={styles.pic} source={{ uri: story.src }}>
                </Image>
                <Text>{
                  story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView>
        {/* USER 1 FEED */}
        {/* POST HEADER */}
        <View style={styles.profileheader}>
          <TouchableOpacity style={styles.profilepic}>
            <FontAwesome name="users" size={25} color="white" style={{ margin: 10 }} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>TokyoPicArtist</Text>

          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={{ marginLeft: '73%' }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* POSTS */}
        
          <View style={{ backgroundColor: 'black', width: '100%', height: "30%" }}>

            <Image style={{ width: '100%', maxHeight: '100%'}}
              source={require('../HomePage/postimage.jpg')}>
            </Image>
          </View>

          {/* POST FOOTER */}
          <View backgroundColor='white'>
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
              <TouchableOpacity>
                <FontAwesome5 name="heart" size={30} color="black" style={{ marginTop: 5 }} /></TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 40, height: 40 }} source={require('../HomePage/comment.png')}>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 30, height: 30, marginTop: 8 }} source={require('../HomePage/share.png')}>
                </Image></TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 35, height: 35, marginTop: 8, marginLeft: '73%' }} source={require('../HomePage/bookmark.png')}>
                </Image></TouchableOpacity>
            </View>
          </View>
        

        {/* USER 2 FEED */}
        {/* POST HEADER */}
        <View style={styles.profileheader}>
          <TouchableOpacity style={styles.profilepic}>
            <FontAwesome name="users" size={25} color="white" style={{ margin: 10 }} />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>agentsof_marvel</Text>

          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="black" style={{ marginLeft: '71%' }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* POSTS */}
        
          <View style={{ backgroundColor: 'black', width: '100%' }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, marginVertical: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </Text>
          </View>

          {/* POST FOOTER */}
          <View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
              <TouchableOpacity>
                <FontAwesome5 name="heart" size={30} color="black" style={{ marginTop: 5 }} /></TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 40, height: 40 }} source={require('../HomePage/comment.png')}>
                </Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 30, height: 30, marginTop: 8 }} source={require('../HomePage/share.png')}>
                </Image></TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 35, height: 35, marginTop: 8, marginLeft: '73%' }} source={require('../HomePage/bookmark.png')}>
                </Image></TouchableOpacity>
            </View>
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
    width: '100%'
  },
  stories: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    width: '100%',
    height: 100
  },
  pic: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 2,
    borderColor: '#fd5740',
  },
  profileheader: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    // width: '100%'
  },
  profilepic: {
    width: 40,
    height: 40,
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
  }
})
export default HomePage;