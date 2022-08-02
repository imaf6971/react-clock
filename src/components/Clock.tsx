import React, { useEffect, useState } from 'react'

const Clock = () => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		let timerID = setInterval(() => setDate(new Date()), 1000)

		return () => clearInterval(timerID);
	}, [])

	return (
		<div>{date.toLocaleTimeString()}</div>
	);
}

export default React.memo(Clock);