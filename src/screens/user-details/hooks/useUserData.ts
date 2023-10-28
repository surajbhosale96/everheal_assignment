import { UserData } from "../types"

export const useUserData = () => {

    const userData: UserData = {
        user_name: "Medina Xavier",
        address: "oakland,CA",
        quote: "Life is not meant to be lived in one place.",
        posts: 167,
        followers: 3.4,
        followings: 9.7,
        profile_img: "https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWFufGVufDB8fDB8fHww"
    }

    return {
        userData
    }

}