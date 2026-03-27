import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "./const";
import * as S from "./styled";

const MenuPage = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");

	const filteredItems = menuItems.filter(item => 
		item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
		item.description.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<S.PageContainer>
			<S.TitleSection>
				<S.Title>Explore</S.Title>
				<S.Subtitle>Manage your quick notes</S.Subtitle>
			</S.TitleSection>

			<S.SearchWrapper>
				<S.SearchInput 
					placeholder="Search pages or tools..." 
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<S.SearchIconWrapper>
					<Search size={18} />
				</S.SearchIconWrapper>
			</S.SearchWrapper>

			<S.Grid>
				{filteredItems.map((item) => (
					<S.Card 
						key={item.id} 
						className={item.featured ? 'featured' : ''}
						onClick={() => navigate(item.path)}
					>
						<S.IconWrapper color={item.color}>
							{item.icon}
						</S.IconWrapper>
						<div>
							<S.CardTitle>
								{item.title}
								<S.ArrowIcon size={16} className="arrow" />
							</S.CardTitle>
							<S.CardDescription>{item.description}</S.CardDescription>
						</div>
					</S.Card>
				))}
			</S.Grid>
		</S.PageContainer>
	);
};

export default MenuPage;