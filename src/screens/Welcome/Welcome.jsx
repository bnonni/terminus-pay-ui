import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
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
		<div className="">
            <h1 className="">
				Big Message
			</h1>
                
			<p>Smaller message.</p>

			{!!qrUrl ?
				<div style={{width: "100px", height: "100px", border:"1px solid black" }}>QR</div> :
				<Button onClick={handleClick}>
					{isQrLoading? "Loading..." : "Button Text"}
				</Button>
			}
        </div>
    );
};
