import React from 'react';
import Button from './Button';

import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content text-center">
                <p>
                    <strong>Cornell Venture Capital (CVC)</strong> is a student-led organization that works to provide undergraduates access to the leading venture capital firms and their portfolio companies.
                </p>
                <p className="mt-3">
                    Donations help power CVC's success. For instructions on how to support CVC please reach out to <strong>info@cornellvc.com</strong>
                </p>
                <Button href="https://www.cornellvc.com/" color="#A5312A">Visit Our Website</Button>
            </div>
        </div>
    )
}