import { SafeAreaView, View } from 'react-native';
import ToDoHeader from './src/components/ToDoHeader';

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <ToDoHeader />
      </SafeAreaView>
    )
  }

  return (
    <View>
      <RootApp />
    </View>
  );
}
