import React, { useState, useEffect } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useCarContext } from './CarContext'; // Make sure to adjust the import path

export const Reserve = () => {
	const { selectedCar } = useCarContext();
	const formValues = {
		name: '',
		email: '',
		pickupDate: '',
		returnDate: ''
	}
	return (
		<div>Reserve</div>
	)
}

export default Reserve