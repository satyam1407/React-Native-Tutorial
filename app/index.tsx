import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  // const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* <Button
        title="About"
        onPress={() => router.push("./about")}
      /> */}
      <Link style={style.link} href={'./about'}>
        <Text style={style.linkText}>About</Text>
      </Link>
      <Link style={style.link} href={'/products'}>
        <Text style={style.linkText}>Products</Text>
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  link: {
    marginTop: 11,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
