import { View, TextInput } from 'react-native'
import MyCustomCheckbox from './checkbox'
import { useSelector } from 'react-redux'
import { RootState } from './store'

const CustomInput = () => {

    const isVisible = useSelector((state: RootState) => state.secretKey.isVisible);

  return (
      <View style={{
        gap:10
      }}>
          <TextInput style={{
            "borderWidth":1,
            "borderColor":"grey"
          }}  secureTextEntry={!isVisible} placeholder="You Secret Message!" />
          <MyCustomCheckbox />
      </View>
  )
}

export default CustomInput