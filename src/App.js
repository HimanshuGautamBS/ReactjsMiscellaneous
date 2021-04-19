// import './App.css';
import React, {useState , useEffect} from 'react'
import * as user from "./User";
function App() {

const [count, setCount]  = useState(1)

useEffect(()=>{
  // alert("clicked")
},[])

function incrementCount(){
  setCount(prev=>prev+2)
 }
  return (
    <div className="App">
      <button onClick={incrementCount}>+</button>
     <span>{count}</span> 
     <user.default name="herry"/>
     <div style={{padding:"20px"}}>
       {/* {user.uno()} */}
     {/* {user.dos()}
     {user.tres()}</div>
     {user.callMe()} */}
</div>
    
    
//     import React, { Component } from "react";
// import "../../css/login.css";
// import "../../css/main.css";
// import Footer from "./Footer";
// import { Alert } from "react-bootstrap";

// export default class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       show: false,
//       Alert_message: "",
//       email: localStorage.getItem("email"),
//       fetchedEmail: "",
//       emailError: "",
//       notFound: "",
//       id: [],
//       name: [],
//       subdomain: [],
//       profile_url: [],
//     };
//   }

//   valid() {
//     const regex = /^\w+(\.[-]?\w+)*@\w+(\.[-]?\w+)*(\.\w{2,3})+$/;
//     if (this.state.email && !regex.test(this.state.email)) {
//       this.setState({ show: false });
//       this.setState({ emailError: "Invalid Email" });
//       return false;
//     } else if (this.state.email === "") {
//       this.setState({ emailError: "Please provide email!" });
//       return false;
//     } else {
//       this.setState({ emailError: "" });
//       return true;
//     }
//   }

//   handlesubmit = (event) => {
//     fetch(
//       `http://geeksonrails.com/api/v2/check_email?email=${this.state.email}`,
//       {
//         method: "get",
//         headers: new Headers({
//           Authorization: "Basic " + btoa("username:password"),
//           "Content-Type": "application/json",
//           Accept: "application/vnd.netgym.v2",
//         }),
//       }
//     )
//       .then((response) => response.json())
//       .then((res) => {
//         console.log(res);
//         this.setState({ emailError: res.error });
//         if (this.valid()) {
//           if (res.select === true) {
//             this.props.history.push("/select/business_select");
//           } else if (res.status === 404) {
//             this.setState({ Alert_message: res.error, show: true });
//             setTimeout(() => {
//               this.setState({ show: false });
//             }, 5000);
//           }
//         }
//       });

//     localStorage.setItem("email", this.state.email);
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <>
//         <nav className="navbar navbar-inverse fixed-top">
//           <div className="container">
//             <div id="navbar" className="navbar-collapse login-header d-flex">
//               <a className="navbar-brand" href="/">
//                 <img
//                   src={process.env.PUBLIC_URL + "/images/logo-light.png"}
//                   alt="Netgym"
//                 />
//               </a>

//               <ul className="nav navbar-nav navbar-right">
//                 <li className="active">
//                   <a
//                     href="/"
//                     className="login-link text-white text-decoration-none fw-normal"
//                   >
//                     Home
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div className="login-section">
//           <Alert
//             className="customized_alert"
//             show={this.state.show}
//             onClose={() => this.setState({ show: false })}
//             dismissible
//             variant="danger"
//           >
//             {this.state.Alert_message}
//           </Alert>
//           <div className="container">
//             <div className="col-lg-5 col-md-6 mx-auto">
//               <div className="card p-5">
//                 <h2>Sign In</h2>
//                 <form onSubmit={this.handlesubmit}>
//                   <div className="mb-3">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Enter Email"
//                       value={this.state.email}
//                       onChange={(event) =>
//                         this.setState({ email: event.target.value })
//                       }
//                     />

//                     <span style={{ color: "red", fontSize: "12px" }}>
//                       {this.state.emailError}
//                     </span>
//                   </div>
//                   <input
//                     type="submit"
//                     value="Submit"
//                     className="blue-btn w-100"
//                   />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }
// }

    </div>
  );
}

export default App;
