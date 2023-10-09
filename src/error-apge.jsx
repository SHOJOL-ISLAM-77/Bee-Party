import { FidgetSpinner } from "react-loader-spinner";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page" className="gap-5 flex flex-col justify-center items-center h-screen bg-[url('')]">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                backgroundColor="#F4442E"
            />
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-3xl font-semibold">{error.status || error.message}</i>
            </p>
            <Link to="/" className="btn px-6">Go Home</Link>
        </div>
    );
}