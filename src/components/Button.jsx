/* eslint-disable react/prop-types */
const Button = ({ text, bgcol, shdcol, fontcol }) => {
	return (
		<button className={`text-sm ${fontcol} ${bgcol} px-4 py-2 font-bold rounded-md ${shdcol} shadow-md hover:shadow-lg hover:${shdcol} duration-500`}>{text}</button>
	)
}

export default Button