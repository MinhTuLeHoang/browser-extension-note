import { pagePaths } from "@/common/constants/PagePath";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
	const navigate = useNavigate();

	return (
		<div>
			Menu Page

			<button onClick={() => navigate(pagePaths.Demo)}>navigate</button>
		</div>
	);
};

export default MenuPage;