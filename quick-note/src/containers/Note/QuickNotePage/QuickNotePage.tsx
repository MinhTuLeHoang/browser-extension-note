import { notePagePaths } from "@/common/constants/PagePath";
import { useNavigate } from "react-router-dom";

const QuickNotePage = () => {
	const navigate = useNavigate();

	return (
		<div>
			QuickNotePage

			<button onClick={() => navigate(notePagePaths.Intro)}>navigate</button>
		</div>
	);
};

export default QuickNotePage;