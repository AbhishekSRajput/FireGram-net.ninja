import React, { useEffect } from 'react';
import UseStorage from '../hooks/UseStorage';

const ProgressBar = ({ file, setFile }) => {
	const { url, progress } = UseStorage(file);
	console.log(progress, url);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return <div className="progress-bar" style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
