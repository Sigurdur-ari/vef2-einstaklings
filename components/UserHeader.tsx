import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";
import { View, Text } from "react-native";
import Button from "./Button";

export default function UserHeader(){
    const { user } = useAuth();
    
    const displayName = user ? 
      (user.isAnonymous ? 'Stranger' : user.displayName || user.email) 
      : 'Stranger';

    const handleLogout = async () => {
        try {
          await signOut(auth);
        } catch (error) {
          console.error("Error signing out:", error);
        }
    };
  
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
        <Text style={{ fontSize: 16, color: '#000' }}>
          {"Logged in as: " + displayName}
        </Text>
        <Button label={"Log out!"} onPress={handleLogout}></Button>
      </View>
    );
  };
