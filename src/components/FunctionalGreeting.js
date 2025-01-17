import React from "react";

// export default function FunctionalGreeting(props) {
//     return (
//         <div className="greeting">
//             <h1>Hello, {props.name}!</h1>
//             <h2>I'm a simple functional component!</h2>
//         </div>
//     );
// }

const FunctionalGreeting = (props) => 
<div>
    <h1>Hello, {props.name}!</h1>
    <h2>I'm a simple shortened function component!</h2>
</div>;

export default FunctionalGreeting;