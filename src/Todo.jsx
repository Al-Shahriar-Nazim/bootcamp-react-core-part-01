// export default function Todo({task}){
// return (
//     <li>Task :{task}</li>
// )
// }

// export default function Todo({ task, isDone,time=100 }) {
//   if (isDone === true) {
//     return <li>Done Task :{task} and Duration :{time}</li>;
//   }
//   return <li>Not done Task :{task}</li>;
// }

// conditional rendering
// export default function Todo({ task, isDone, time = 0 }) {
//   return isDone === true ? (
//     <li>
//       Task:{task} and duration :{time}
//     </li>
//   ) : (
//     <li>
//       Not task :{task}
//     </li>
//   );
// }

// condition rendaring : &&
// export default function Todo({ task, isDone, time = 0 }) {
//   return (
//     isDone === true && (
//       <li>
//         Is done :{task} and duration:{time}
//       </li>
//     )
//   );
// }

// conditional rendering or : ||
// export default function Todo({task,isDone}){
//     return (
//         isDone || <li>Not Done : {task}</li>
//     )
// }

// conditional rendering : use variable
export default function Todo({ task, isDone, time }) {
  let listItem;
  if (isDone === true) {
    listItem = (
      <li>
        is Done :{task} and duration :{time}
      </li>
    );
  } else {
    listItem = <li>Not done :{task}</li>;
  }
  return listItem;
}
