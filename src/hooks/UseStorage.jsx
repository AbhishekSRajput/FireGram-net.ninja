import { useState, useEffect } from 'react';

import {
	projectStorage,
	projectFirestore,
	timeStamp,
} from '../firebse/firebase.config';

const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		//references
		const storageRef = projectStorage.ref(file.name);
		const collectionRef = projectFirestore.collection('images');

		storageRef.put(file).on(
			'state__change',
			(snapshot) => {
				let percentage =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(percentage);
			},
			(error) => {
				setError(error);
			},
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = timeStamp();
				collectionRef.add({ url: url, createdAt });
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, error, url };
};

export default useStorage;
