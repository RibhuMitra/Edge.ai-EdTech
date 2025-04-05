import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const TabIcon = ({ focused, icon, title }) => {
  if (focused) {
    return (
      <ImageBackground 
        style={styles.highlightContainer}
      >
        {icon}
        <Text style={styles.focusedText}>{title}</Text>
      </ImageBackground>
    );
  }
  return (
    <View style={styles.defaultContainer}>
      {icon}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabBarItem,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<MaterialIcons name="home" size={24} color={focused ? "#FFFFFF" : "#FFFFFF"} />} title="Home" />
          ),
        }}
      />
      
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<MaterialIcons name="explore" size={24} color={focused ? "#FFFFFF" : "#FFFFFF"} />}  title="Explore" />
          ),
        }}
      />
      
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<MaterialIcons name="timeline" size={24} color={focused ? "#FFFFFF" : "#FFFFFF"} />} title="Progress" />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={<FontAwesome name="user" size={24} color={focused ? "#FFFFFF" : "#FFFFFF"} />} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  highlightContainer: {
    flexDirection: 'row',
    width: '100%',
    minWidth: 115,
    minHeight: 64,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
    overflow: 'hidden',
    backgroundColor: '#585858'
  },
  focusedText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  defaultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 9999,
    width: '100%',
    height: '100%',
  },
  tabBarItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: 'black',
    borderRadius: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    height: 52,
    position: 'absolute',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default TabsLayout;
