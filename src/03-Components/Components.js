import React, { Component } from 'react';

// Punto inicial
// export default function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        <UserInfo author={this.props.author} />
        <div className="Comment-text">
          {this.props.text}
        </div>
        <div className="Comment-date">
          {formatDate(this.props.date)}
        </div>
      </div>
    );
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function UserInfo(props) {
  return (<div className="UserInfo">
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
    <div className="UserInfo-name">
      {props.author.name}
    </div>
  </div>);
}

export default Comment;
/*****************ACTIVIDAD ******************************
1. Convertir el componente funcional a componente clase
2. Extrar un componente para UserInfo
3. Extraer un componente para el avatar
*********************************************************/
