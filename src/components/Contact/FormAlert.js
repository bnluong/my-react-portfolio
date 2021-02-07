import React, { useState } from 'react';

import FormAlertSuccess from './FormAlertSuccess';
import FormAlertFailure from './FormAlertFailure';

export default function FormAlert({ show, status, hideAlert }) {
	if (show && status === 200)
		return <FormAlertSuccess hideAlert={hideAlert} />;
	else if (show && status === 400)
		return <FormAlertFailure hideAlert={hideAlert} />;
	else return null;
}
