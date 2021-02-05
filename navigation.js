import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  ImageBackground,
  Image,
} from 'react-native';
import Login from './src/components/Authentication/login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {firebase, Auth} from './App';
 
import ChatInbox from './src/components/Chat/chatInbox';
import sender from './assets/images/sender.jpg';
import CreateGroup from './src/components/Chat/CreateGroup';
import Chat from './src/components/Chat/chatRoom';
import {darkTheme, lightTheme} from './src/_actions/theme';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {connect} from 'react-redux';
import {viewModal} from './src/_actions/modalActions';
import {setUser} from './src/_actions/authActions';
import EditGroup from './src/components/Chat/EditGroup';
import GroupInfo from './src/components/Chat/GroupInfo';

const Stack = createStackNavigator();

function App({viewModal, darkTheme, lightTheme, isDark, setUser, roomName}) {
  useEffect(() => {
    Auth().onAuthStateChanged(function (user) {
      if (user) {
        setstate(user);
        setUser(user);
        console.log('User Available');
        // User is signed in.
      } else {
        // No user is signed in.
        console.log('User NOT Available');
      }
    });
  }, user);

  const [user, setstate] = useState(null);
  const [dummy, setDummy] = useState([{}]);

  const New = ({navigation}) => {

     

    const GroupInfoOption = {
      headerTitle: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
          }}>
          <View style={{paddingLeft: 70}}>
            <Text
              style={{
                alignContent: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Group Info
            </Text>
          </View>
        </View>
      ),
      headerTintColor: 'white',
      headerTransparent: isDark ? true : false,
      backgroundColor: 'Blue',
      headerTitleStyle: {},
      headerStyle: isDark ? styles.headerChatDark : styles.headerGroup,
    };

    const GroupEditOption = {
      headerTitle: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{paddingLeft: 70}}>
            <Text
              style={{
                alignContent: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              
              Group Edit
            </Text>
          </View>
        </View>
      ),
      headerTintColor: 'white',
      headerTransparent: isDark ? true : false,
      backgroundColor: 'Blue',
      headerTitleStyle: {},
      headerStyle: isDark ? styles.headerChatDark : styles.headerGroup,
    };

    const Less = {
      headerRight: () => (
        <Menu>
          <MenuTrigger
            text={
              <View style={styles.optionsView}>
                <MenuIcon
                  name={'more-vertical'}
                  style={isDark ? styles.optionsDark : styles.options}
                />
              </View>
            }
          />
          <MenuOptions
            style={isDark ? styles.mainmenuViewDark : styles.mainmenuView}>
            <MenuOption
              onSelect={(e) => viewModal(e)}
              text={
                <View style={isDark ? styles.menuViewDark : styles.menuView}>
                  <RefreshIcon
                    name={'refresh'}
                    style={isDark ? styles.menuIconDark : styles.menuIcon}
                  />
                  <Text style={isDark ? styles.menuTextDark : styles.menuText}>
                    Trocar Senha
                  </Text>
                </View>
              }
            />
            <MenuOption
              onSelect={(e) => goToProfile(e)}
              text={
                <View style={isDark ? styles.menuViewDark : styles.menuView}>
                  <AntDesign
                    name={'profile'}
                    style={isDark ? styles.menuIconDark : styles.menuIcon}
                  />
                  <Text style={isDark ? styles.menuTextDark : styles.menuText}>
                    Perfil do Aluno
                  </Text>
                </View>
              }
            />
             <MenuOption
              onSelect={(e) => goToPedagogico(e)}
              text={
                <View style={isDark ? styles.menuViewDark : styles.menuView}>
                  <AntDesign
                    name={'profile'}
                    style={isDark ? styles.menuIconDark : styles.menuIcon}
                  />
                  <Text style={isDark ? styles.menuTextDark : styles.menuText}>
                    Perfil Pedago...
                  </Text>
                </View>
              }
            />
             <MenuOption
              onSelect={(e) => goToFinanciero(e)}
              text={
                <View style={isDark ? styles.menuViewDark : styles.menuView}>
                  <AntDesign
                    name={'profile'}
                    style={isDark ? styles.menuIconDark : styles.menuIcon}
                  />
                  <Text style={isDark ? styles.menuTextDark : styles.menuText}>
                    Perfil Financi...
                  </Text>
                </View>
              }
            />
            <MenuOption
              onSelect={() => out()}
              text={
                <View style={isDark ? styles.menuViewDark : styles.menuView}>
                  <LogoutIcon
                    name={'logout'}
                    style={isDark ? styles.menuIconDark : styles.menuIcon}
                  />
                  <Text style={isDark ? styles.menuTextDark : styles.menuText}>
                    Sair
                  </Text>
                </View>
              }></MenuOption>
            {isDark ? (
              <MenuOption
                onSelect={(e) => lightTheme(e)}
                text={
                  <View style={isDark ? styles.menuViewDark : styles.menuView}>
                    <SunIcon
                      name={'sun-o'}
                      style={isDark ? styles.menuIconDark : styles.menuIcon}
                    />
                    <Text
                      style={isDark ? styles.menuTextDark : styles.menuText}>
                      Light
                    </Text>
                  </View>
                }></MenuOption>
            ) : (
              <MenuOption
                onSelect={(e) => darkTheme(e)}
                text={
                  <View style={isDark ? styles.menuViewDark : styles.menuView}>
                    <MoonIcon
                      name={'moon'}
                      style={isDark ? styles.menuIconDark : styles.menuIcon}
                    />
                    <Text
                      style={isDark ? styles.menuTextDark : styles.menuText}>
                      Dark
                    </Text>
                  </View>
                }></MenuOption>
            )}
          </MenuOptions>
        </Menu>
      ),
      title: '            ESCOLHA O ALUNO',
      headerTintColor: isDark ? 'white' : '',
      headerTransparent: true,
      headerTitleStyle: {alignSelf: 'center'},
      headerStyle: isDark ? styles.headerTitleDark : styles.headerTitle,
    };
   
   
    const ChatInboxStyle = {
      headerTintColor: 'white',
      title: '',
      // headerTransparent: true,
      headerStyle: isDark ? styles.ChatInboxHeaderDark : styles.ChatInboxHeader,
    }; 
    const ChatName = {
      headerTintColor: isDark ? 'white' : '',
      title: 'Francine Riley',
      headerTransparent: true,
      headerTitleStyle: {alignSelf: 'center'},
      headerStyle: isDark ? styles.headerTitleDark : styles.headerTitle,
    };
  
    const RoomName = {
      headerRight: () => (
        <Menu>
          <MenuTrigger
            text={
              <View style={styles.optionsView}>
                <MenuIcon
                  name={'more-vertical'}
                  style={isDark ? styles.optionsChatDark : styles.optionsChat}
                />
              </View>
            }
          />
          <MenuOptions
            style={isDark ? styles.mainmenuViewDark : styles.mainmenuView}>
            <MenuOption
              onSelect={(e) => navigation.navigate('EditGroup')}
              text={
                <View style={isDark ? styles.menuViewDark : styles.menuView}>
                  {/* <RefreshIcon
                    name={'refresh'}
                    style={isDark ? styles.menuIconDark : styles.menuIcon}
                  /> */}
                  <Text style={isDark ? styles.menuTextDark : styles.menuText}>
                   Edit Group
                  </Text>
                </View>
              }
            />
            <MenuOption
              onSelect={() => navigation.navigate('GroupInfo')}
              text={
                <View style={isDark ? styles.menuViewDark : styles.menuView}>
                  {/* <LogoutIcon
                    name={'logout'}
                    style={isDark ? styles.menuIconDark : styles.menuIcon}
                  /> */}
                  <Text style={isDark ? styles.menuTextDark : styles.menuText}>
                   Group Info
                  </Text>
                </View>
              }></MenuOption>
         
          </MenuOptions>
        </Menu>
      ),
      headerTitle: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            // borderWidth: 1,
            // borderColor: 'red',
          }}>
          <View>
            <Image
              source={sender}
              style={{width: 40, height: 40, borderRadius: 60}}
            />
          </View>
          <View style={{paddingLeft: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color:'white'}}>{roomName}</Text>
          </View>
        </View>
      ),
      headerTintColor: isDark ? 'white' : 'white',
      // headerTransparent: true,
      backgroundColor: isDark? '#21223E' : 'white',
      headerTitleStyle: {},
      headerStyle: isDark ? styles.headerChatDark : styles.headerChat,
    };

    const GroupOption = {
      headerTitle: (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
          }}>
          <View style={{paddingLeft: 70}}>
            <Text
              style={{
                alignContent: 'center',
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Create Group
            </Text>
          </View>
        </View>
      ),
      headerTintColor: 'white',
      headerTransparent: isDark ? true : false,
      backgroundColor: 'Blue',
      headerTitleStyle: {},
      headerStyle: isDark ? styles.headerChatDark : styles.headerGroup,
    };

    const showStudents = () => {
      console.log('hiiiiiii');
      navigation.navigate('Login');
    };
    const out = () => {
      navigation.navigate('Login');
      Auth()
        .signOut()
        .then(function () {
          setstate(null);
          // alert('f');
          // Sign-out successful.
          console.log(user);
          console.log('Sign-out successful.');
        })
        .catch(function (error) {
          // An error happened.
        });
    };
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Students} options={Less} />
        <Stack.Screen name="Chat" component={Chat} options={RoomName} />
        <Stack.Screen name="CreateGroup" component={CreateGroup} options={GroupOption} />
       <Stack.Screen
          name="ChatInbox"
          component={ChatInbox}
          options={ChatInboxStyle}
        />   <Stack.Screen name="EditGroup" component={EditGroup} options={GroupEditOption}/>
        <Stack.Screen name="GroupInfo" component={GroupInfo} options={GroupInfoOption} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer style={{height: 1}}>
      {user ? (
        <Stack.Navigator headerMode="none" initialRouteName="Login">
          <Stack.Screen name="Students" component={New} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator headerMode="none" initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
const mapStateToProps = (state) => ({
  isDark: state.themeReducer.theme,
  roomName: state.chatReducer.roomName,
});

export default connect(mapStateToProps, {
  viewModal,
  darkTheme,
  lightTheme,
  setUser,
})(App);
const styles = StyleSheet.create({
  ProfileHeader: {
    height: 50,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4287f5',
  },
  ProfileHeaderDark: {
    height: 50,
    color: 'white',
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4D7CFE',
  },

  FinanceProfileHeader: {
    height: 50,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4287f5',
  },
  FinanceProfileHeaderHeaderDark: {
    height: 50,
    color: 'white',
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4D7CFE',
  },
  PedagogicoProfileHeader: {
    height: 50,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4287f5',
  },
  PedagogicoProfileHeaderHeaderDark: {
    height: 50,
    color: 'white',
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4D7CFE',
  },



  ChatInboxHeaderDark: {
    height: 50,
    color: 'white',
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4D7CFE',
  },
  ChatInboxHeader: {
    height: 50,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4D7CFE',
  },

  headerTitleDark: {
    height: 50,
    color: 'white',
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: 'white',
  },
  headerTitle: {
    height: 50,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: 'white',
  },
  headerChatDark: {
    // height: 20,
    color: 'white',
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#21223E',
    opacity:0.9,
  },
  headerGroup: {
    // height: 50,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4D7CFE',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    borderWidth: 5,
  },
  headerChat: {
    // height: 50,
    // shadowColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
    backgroundColor: '#4D7CFE',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  mainmenuViewDark: {padding: 10, backgroundColor: '#21223E'},
  mainmenuView: {padding: 10, backgroundColor: 'white', },
  menuView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
  },
  menuViewDark: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    color: 'white',
    backgroundColor: '#21223E',
  },
  menuText: {
    fontSize: 20,
    color: '#666666',
    paddingLeft: 15,
  },
  menuTextDark: {
    fontSize: 20,
    color: '#666666',
    color: 'white',
    paddingLeft: 15,
  },
  menuIcon: {
    // color:'white',
    color: '#666666',
    fontSize: 20,
  },
  menuIconDark: {
    color: 'white',
    fontSize: 20,
  },
  options: {
    fontSize: 30,
    marginLeft: '-20%',
    
  },
  optionsDark: {
    color: 'white',
    fontSize: 30,
    marginLeft: '-20%',
  },
  optionsChat: {
    fontSize: 30,
    marginLeft: '-20%',
    color:'white'
  
  },
  optionsChatDark: {
    color: 'white',
    fontSize: 30,
    marginLeft: '-20%',
  },
  optionsView: {
    width: 30,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
