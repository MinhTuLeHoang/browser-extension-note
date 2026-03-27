import { pagePaths } from "@/common/constants/PagePath";
import { useNavigate } from "react-router-dom";

const NoteIntroPage = () => {
	const navigate = useNavigate();

	return (
		<div>
			NoteIntroPage

			<button onClick={() => navigate(pagePaths.Demo)}>navigate</button>
		</div>
	);
};

export default NoteIntroPage;