import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

export const Welcome = () => {
	const [isQrLoading, setIsQrLoading] = useState(false);
    const [qrUrl, setQrUrl] = useState();
	let navigate = useNavigate();

	function handleClick () {
		// TODO: Fire auth request, receive QR
		setIsQrLoading(true);
		mockAuthReq()
			.then(() => {
				setIsQrLoading(false);
				setQrUrl('example.com');
			});
	}
    
	function mockAuthReq () {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, 1000);
		});
	}

	return (
		<div className="welcome-main-content">
            <h1 className="welcome-heading">
				Welcome
			</h1>
                
			<p className="welcome-message">Smaller message.</p>
			
			<div className="qr-container">
				{!!qrUrl ?
					<div className="mock-qr">QR</div> :
					<button className="auth-btn" onClick={handleClick}>
						{ isQrLoading ? "Loading..." : "Button Text" }
					</button>
				}
			</div>
        </div>
    );
};
