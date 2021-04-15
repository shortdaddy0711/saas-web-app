import { useAuth0 } from '@auth0/auth0-react';

import Logout from '../logout/Logout';

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<div>
				<div className='flex m-4 p-4'>
					<img
						className='round-full w-20 h-20 mr-4'
						src={user.picture}
						alt={user.nickname}
					/>
					<h2>{user.nickname}</h2>
				</div>
				<div className='flex'>
					<Logout />
				</div>
			</div>
		)
	);
};

export default Profile;
