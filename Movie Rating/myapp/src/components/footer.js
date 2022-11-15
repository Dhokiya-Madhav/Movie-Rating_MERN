import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-facebook"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-instagram"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-linkedin"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-google"></i
                    ></a>
                </section>
            </div>
            <div className="text-center p-3">
                © 2022 Copyright: Movie Rating
            </div>
        </footer>

    )
}
