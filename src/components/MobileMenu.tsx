import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { FC, useState } from 'react';

interface Path {
	title: string;
	path: string;
}

interface MobileMenuProps {
	currentPage: string;
	paths: Path[];
}

const MobileMenu: FC<MobileMenuProps> = ({ currentPage, paths }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button
				id="demo-positioned-button"
				aria-controls={open ? 'demo-positioned-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{currentPage === '/' ? 'Home' : currentPage.slice(1)}
			</Button>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				{paths.map((path) => (
					<Link href={path.path} key={path.path}>
						<MenuItem
							onClick={handleClose}
							disabled={currentPage === path.path}
						>
							{path.title}
						</MenuItem>
					</Link>
				))}
			</Menu>
		</>
	);
};

export default MobileMenu;
