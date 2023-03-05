import { Button } from "./Button"

export const Comments = ({userComments}) => {
  return (
    <>
        {userComments.map( comment => {
            return (
            <div key={comment.id}>
                <span>{comment.autor}</span>
                <p>{comment.body}</p>
                <Button />
            </div>
        )})}
    </>
  )
}
