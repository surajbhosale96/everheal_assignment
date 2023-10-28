import { View, Text } from 'react-native'
import React from 'react'
import UserProfileImage from './UserProfileImage'
import UserDetails from './UserDetails'
import { useUserData } from '../hooks/useUserData'
import { userDetailsStyles } from '../userDetailsStyles'

const UserDetailsScreen = () => {
    const {userData} = useUserData()
  return (
    <View style={userDetailsStyles.mainContainer}>
        <UserProfileImage profile_img={userData.profile_img}/>
        <UserDetails  userData={userData}/>
    </View>
  )
}

export default UserDetailsScreen