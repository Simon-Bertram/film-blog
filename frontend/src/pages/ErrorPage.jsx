import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  
  return ( 
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p><i>{ error.status || error.messsage }</i></p>
    </div>  
   );
}
 
export default ErrorPage;