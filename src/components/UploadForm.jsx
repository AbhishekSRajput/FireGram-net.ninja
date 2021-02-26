import React, { useState } from 'react';
import ProgressBar from '../components/ProgressBar';

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const types = ['image/png', 'image/jpeg', 'image/svg'];

	const handleChange = (e) => {
		let selected = e.target.files[0];

		if (selected && types.includes(selected.type)) {
			setFile(selected);
			setError('');
		} else {
			setFile(null);
			setError('please select a valid file png or jpeg');
		}
	};

	return (
		<form>
			<label>
				<input type="file" onChange={handleChange} />
				<span>+</span>
			</label>

			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	);
};
export default UploadForm;
