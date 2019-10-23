import ApolloClient, { gql } from 'apollo-boost'
import { encode } from 'base-64'

import { username, token } from '../config/secrets'

const baseUrl = "https://api.github.com/graphql"

const auth = encode(username + ":" + token)

export const apolloClient = new ApolloClient({
  uri: baseUrl,
  headers: {
    "Authorization": `Basic ${auth}`
  }
})

export const test = () => {
  apolloClient.query({
    query: gql`
      {
        repository(owner: "ni3t", name: "graphhub") {
          name
        }
      }
    `
  }).then(res => console.log(res))
}
