import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { userDetailsStyles } from '../userDetailsStyles'
import Ionicons from '@expo/vector-icons/Ionicons';

interface IUserProfileImageProps {
    profile_img: string
}

const UserProfileImage = (props: IUserProfileImageProps) => {
    return (
        <View style={userDetailsStyles.userProfileImageContainer}>
                <ImageBackground
                    source={{ uri: props.profile_img }} // Replace with your image path
                    style={userDetailsStyles.imageBackground}
                    resizeMode="cover"
                >
                    <View style={userDetailsStyles.headerContainer}>
                        <Ionicons name='chevron-back-outline' color={"#FFFEFF"} size={22} />
                        <Ionicons name='md-settings-outline' color={"#FFFEFF"} size={22} />
                    </View>
                </ImageBackground>
        </View>
    )
}



export default UserProfileImage