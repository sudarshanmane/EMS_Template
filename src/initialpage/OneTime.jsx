import React, { useState, useRef } from 'react';

function OtpInput() {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = e.target.value;
        setOtp(updatedOtp);

        if (e.target.value !== '' && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        const BACKSPACE_KEY = 8;
        if (e.keyCode === BACKSPACE_KEY && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="otp-wrap">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    placeholder="0"
                    maxLength="1"
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(input) => (inputRefs.current[index] = input)}
                />
            ))}
        </div>
    );
}

export default OtpInput;
