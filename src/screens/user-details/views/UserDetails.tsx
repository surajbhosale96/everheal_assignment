import { View, Text } from 'react-native'
import React from 'react'
import { UserData } from '../types'
import { userDetailsStyles } from '../userDetailsStyles'
import Button from '../../../components/buttons/Button'

interface IUserDetails {
    userData: UserData
}

const UserDetails = (props: IUserDetails) => {
    return (
        <View style={userDetailsStyles.userDetailsContainer}>
            <View style={userDetailsStyles.userNameView}>
                <Text style={userDetailsStyles.userNameText}>{props.userData.user_name}</Text>
                <Text style={userDetailsStyles.addressText}>{props.userData.address}</Text>
            </View>
            <View style={userDetailsStyles.quoteView}>
                <Text style={userDetailsStyles.quoteText}>{props.userData.quote}</Text>
            </View>
            <Button title='Follow' buttonStyle={{marginVertical:20}}/>

            <View style={userDetailsStyles.bottomViewContainer}>
                <View style={userDetailsStyles.bottomViewRow}>
                    <Text style={userDetailsStyles.bottomViewLargeText}>{props.userData.posts}</Text>
                    <Text style={userDetailsStyles.bottomViewSmallText}>Post</Text>
                </View>
                <View style={userDetailsStyles.bottomViewRow}>
                    <Text style={userDetailsStyles.bottomViewLargeText}>{props.userData.followings}K</Text>
                    <Text style={userDetailsStyles.bottomViewSmallText}>Following</Text>
                </View>
                <View style={userDetailsStyles.bottomViewRow}>
                    <Text style={userDetailsStyles.bottomViewLargeText}>{props.userData.followers}K</Text>
                    <Text style={userDetailsStyles.bottomViewSmallText}>Followers</Text>
                </View>
            </View>

        </View>
    )
}

export default UserDetails