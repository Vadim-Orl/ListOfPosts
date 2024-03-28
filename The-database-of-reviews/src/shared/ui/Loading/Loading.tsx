import './Loading.css'
import {Circles } from 'react-loader-spinner'

export function Loading(){
	return (
		<div className="loading">
			<Circles
 				 height="80"
 				 width="80"
 				 color="rgb(255 159 44)"
 				 ariaLabel="loading"
 				 wrapperClass="loading"
			/>
		</div>
	);
}