import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTests } from "../../redux/test/testSlice";

const HomePage = (props) => {
	const dispatch = useDispatch();
	const { list } = useSelector((state) => state?.testsReducer);
	console.log(list, "list");
	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);
	return (
		<div>
			{(list || []).map((test, index) => (
				<div key={index}>
					<h1>{test?.title}</h1>
					<h2>{test?.body}</h2>
				</div>
			))}
		</div>
	);
};

export default HomePage;
