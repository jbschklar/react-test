import React from "react";
import { MdModeEditOutline, BsCheck } from "react-icons/all";

const EditIcon = (props) => {
	return (
		<div>
			<MdModeEditOutline onClick={props.editFn} />
			<BsCheck onClick={props.submitFn} className="hidden" />
		</div>
	);
};

export default EditIcon;
