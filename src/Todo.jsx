// export default function Todo({task}){
// return (
//     <li>Task :{task}</li>
// )
// }

export default function Todo({ task, isDone,time=100 }) {
  if (isDone === true) {
    return <li>Done Task :{task} and Duration :{time}</li>;
  }
  return <li>Not done Task :{task}</li>;
}
