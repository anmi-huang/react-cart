import React from 'react'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

const Layout = (props) => {
    return (
        <div className="maw-1280px mx-auto">
            <div className="page-container">
                <header>
                    <Navbar />
                </header>
            </div>
            <Footer />
        </div>
    )
}
export default React.memo(Layout)

// import React from "react";
// import ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";

// import "./styles.css";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   console.log(watch("example")); // you can watch individual input by pass the name of the input

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>

//       <input defaultValue="test" {...register("example")} />

//       <input {...register("exampleRequired", { required: true })} />

//       {errors.exampleRequired && <p>This field is required</p>}

//       <input type="submit" />
//     </form>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
