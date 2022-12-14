// Define mutations

import {gql} from "@apollo/client";

export const DELETE_TOPIC = gql`
  mutation deleteTopic($id: Int!) {
    deleteTopic(id: $id) {
      id
    }
  }
`

export const UPDATE_TOPIC = gql`
  mutation updateTopic($id: Int!, $input:UpdateTopicInput!) {
    updateTopic(id: $id, input:$input ) {
      id
    }
  }
`
export const CREATE_NEW_TOPIC = gql`
  mutation CreateNewTopic($input: CreateTopicInput!) {
    createTopic(input: $input){
      id
    }}
`
