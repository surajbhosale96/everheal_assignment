import { Platform, StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

export const userDetailsStyles = StyleSheet.create({
    mainContainer: { flex: 1 },
    userDetailsContainer: { flex: 1, paddingHorizontal: 25, paddingVertical: 16 },
    userProfileImageContainer: {
        flex: 1.3,
    },
    bottomViewContainer: { flexDirection: "row", justifyContent: "space-between" },
    profileImagecontainer: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        paddingHorizontal: 20,
    },
    headerContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 50, alignItems: "center" },
    userNameView: { alignItems: "center", paddingVertical: 15 },
    userNameText: { fontSize: 24, color: "#4D4D4D", fontWeight: "600" },
    addressText: { fontSize: 14, color: "#858585" },
    quoteView: { alignItems: "center", paddingVertical: 15, paddingHorizontal: 35 },
    quoteText: { color: "#999999", fontSize: 18, fontWeight: "400", textAlign: "center" },
    bottomViewRow: { alignItems: "center", paddingHorizontal: 12 },
    bottomViewLargeText: { fontSize: 20, color: "#5A5A5A", fontWeight: "500" },
    bottomViewSmallText: { color: "#B3B3B3", fontWeight: "600" },


})