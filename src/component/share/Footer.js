import React from 'react';

const Footer = () => {
    return (
        <footer class="text-center text-white" style={{ backgroundColor: '#0a4275' }}>
            <div class="container p-6">
                <div class="">
                    <p class="flex justify-center items-center">
                        <span class="mr-4 text-2xl">Enjoy The Daily Task App</span>

                    </p>
                </div>
            </div>

            <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2021 Copyright: <span>Daily Task App</span>
            </div>
        </footer>
    );
};

export default Footer;