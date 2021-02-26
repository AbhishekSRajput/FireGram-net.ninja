import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/firebase.config';

const UseFirestore = (collection) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unSub = projectFirestore
			.collection(collection)
			.orderBy('createdAt', 'desc')
			.onSnapshot((snapshot) => {
				let documents = [];

				snapshot.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});

				setDocs(documents);
			});

		return () => unSub();
	}, [collection]);

	return { docs };
};

export default UseFirestore;
