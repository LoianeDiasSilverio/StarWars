import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerView:{
    padding:20
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  viewRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
  },
  ball: {
    borderRadius: 50,
    height: 20,
    width: 20,
    borderWidth: 1
  },
  ballActive: {
    borderRadius: 50,
    height: 20,
    width: 20,
    borderWidth: 1,
    backgroundColor: 'yellow'
  }
});


export default Styles;