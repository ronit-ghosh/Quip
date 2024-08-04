import quip from "../images/quip.svg"

const UnderDevelopment = () => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={quip} />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-100">Website in Progress</h1>
                    <p className="mb-1 leading-relaxed capitalize">This website is still under development. Please check back soon for updates!</p>
                    <p className="mb-8 leading-relaxed capitalize">-- Chat, share, and laugh in real-time --</p>
                    <div className="flex justify-center gap-6">
                        <button className="btn btn-disabled text-lg cursor-not-allowed" tabIndex="-1" role="button" aria-disabled="true">
                            Log In
                        </button><button className="btn btn-disabled text-lg cursor-not-allowed" tabIndex="-1" role="button" aria-disabled="true">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnderDevelopment
