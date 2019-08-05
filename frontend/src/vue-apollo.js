import VueApollo from 'vue-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';

const httpLink = new HttpLink({
  // 需要使用绝对路径
  // uri: 'http://106.13.97.232:4000/',
  // uri: 'http://localhost:4000/',
  // uri: 'http://39.98.178.160:4000/',
  uri: 'http://47.92.73.208:4000/',
});

const cache = new InMemoryCache();

// 创建中间件用于添加request header
const middlewareLink = new ApolloLink((operation, forward) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo['token'];
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}` || null
      }
    });
    return forward(operation);
  } catch (error) {
    // console.log(error);
    operation.setContext({
      headers: {
        Authorization: null
      }
    });
    return forward(operation);
  }
});

const apolloClient = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export { apolloProvider };