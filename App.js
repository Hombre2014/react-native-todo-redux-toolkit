import { SafeAreaView, View } from 'react-native';
import ToDoHeader from './src/components/ToDoHeader';
import ToDoList from './src/components/ToDoList';
import { Provider } from 'react-redux';
import store from './src/redux/store';

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
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
