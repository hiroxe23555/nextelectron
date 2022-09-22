import { ApolloClient, InMemoryCache } from '@apollo/client'
    
    const apolloClient = new ApolloClient({
      uri: 'http://localhost:8000/api/graphql',
      cache: new InMemoryCache(),
    })
    
    
    export default apolloClient