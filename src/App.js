import { Provider } from 'react-redux';
import store from 'redux/store';

import PostForm from 'components/PostForm';
import PostList from 'components/PostList';

import 'styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <PostForm />
      <PostList />
    </Provider>
  );
}

export default App;
