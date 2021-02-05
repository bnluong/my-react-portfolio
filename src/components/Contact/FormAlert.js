import React, { useState } from 'react';

import FormAlertSuccess from './FormAlertSuccess';
import FormAlertFailure from './FormAlertFailure';

export default function FormAlert({ show, status, hideAlert }) {
	if (show && status === 'success')
		return <FormAlertSuccess hideAlert={hideAlert} />;
	else if (show && status === 'failure')
		return <FormAlertFailure hideAlert={hideAlert} />;
	else return null;
}
