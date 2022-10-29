import { gql, useMutation } from '@apollo/client'

const ADD_TODO = gql`
  mutation Add($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`
function DeleteTopicButton(): JSX.Element {
  const [add, { data, loading, error }] = useMutation(ADD_TODO)

  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="btn btn-outline btn-primary rounded-md"
      >
        Delete
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-outline btn-primary btn-circle btn-sm absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are you sure you want to delete this topic?
          </h3>
          <p className="py-4">All you leads for this topic will be deleted</p>
          <div className="flex justify-end">
            {' '}
            <button className="btn btn-outline btn-primary rounded-md">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DeleteTopicButton
