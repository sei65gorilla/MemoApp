import { StyleSheet, TextInput, View } from "react-native"
import CircleButton from "../../components/CircleButton"
import Header from "../../components/Header"
import Icon from "../../components/Icon"

const Edit = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value={"買い物\nリスト"} />
      </View>
      <CircleButton>
        <Icon name={"check"} size={40} color={"#ffffff"} />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24
  }
})

export default Edit
