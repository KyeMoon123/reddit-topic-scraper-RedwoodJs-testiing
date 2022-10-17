// Define mutations

export const UPDATE_TOPIC = gql`
  mutation updateTopic(
    $description: String
    $name: String
    userId: String,
  ) {
    updateTopic(id: 10, input: { description: $description, name: $name, userId: $userId })
  }
`
