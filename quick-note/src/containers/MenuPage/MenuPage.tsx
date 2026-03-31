import { useState, Suspense, useMemo } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { menuItems, EClickAction, MenuItem } from "./const";
import * as S from "./styled";
import { searchCompareUtils } from "./utils";
import { LoadableComponent } from "@loadable/component";

const MenuPage = () => {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState("");
	/** Map of UI ID to its corresponding LoadableComponent */
	const [activeExtraUIs, setActiveExtraUIs] = useState<Record<string, LoadableComponent<any>>>({});

	const handleItemClick = (item: MenuItem) => {
		const { action, data } = item.clickAction;
		switch (action) {
			case EClickAction.DEEPLINK:
				if (data.path) {
					if (data.path.startsWith('chrome://')) {
						window.open(data.path, '_blank');
					} else {
						navigate(data.path);
					}
				}
				break;
			case EClickAction.FUNCTION:
				data.func?.();
				break;
			case EClickAction.UI:
				const uiId = data.id || 'menu-extra-ui';
				const UIComponent = data.ui;
				
				if (UIComponent) {
					// Use document.getElementById check as requested to decide on "creation" logic
					// but manage via React state to ensure Suspense and LoadableComponent work correctly.
					const exists = document.getElementById(uiId);
					
					setActiveExtraUIs(prev => ({
						...prev,
						[uiId]: UIComponent
					}));

					console.log(exists ? "Updating existing UI id:" : "Creating new UI id:", uiId);
				}
				break;
		}
	};

	const filteredItems = useMemo(() => {
		if (!searchQuery) return menuItems;
		return menuItems.filter(item => 
			searchCompareUtils(item.title, searchQuery) ||
			searchCompareUtils(item.description, searchQuery) ||
			item.keywords.some(keyword => searchCompareUtils(keyword, searchQuery))
		);
	}, [searchQuery]);

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
						onClick={() => handleItemClick(item)}
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

			{/* Render dynamic extra UIs in the TODO position */}
			{Object.entries(activeExtraUIs).map(([id, UIComp]) => (
				<div key={id} id={id} style={{ position: 'absolute' }}>
					<Suspense fallback={null}>
						<UIComp 
							id={id} 
							handleClose={() => {
								setActiveExtraUIs(prev => {
									const next = { ...prev };
									delete next[id];
									return next;
								});
							}}
						/>
					</Suspense>
				</div>
			))}
		</S.PageContainer>
	);
};

export default MenuPage;