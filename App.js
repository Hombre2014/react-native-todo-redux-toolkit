import { SafeAreaView, View } from 'react-native';
import ToDoHeader from './src/components/ToDoHeader';
import ToDoList from './src/components/ToDoList';

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <ToDoHeader />
        <ToDoList />
      </SafeAreaView>
    )
  }

  return (
    <View>
      <RootApp />
    </View>
  );
}
