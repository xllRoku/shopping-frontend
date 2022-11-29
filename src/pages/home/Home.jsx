import Main from '../../components/main/Main';
import SideBar from '../../components/sideBar/SideBar';
import NewItem from './components/newItem';

const Home = () => {
	return (
		<div className='layout'>
			<SideBar />
			<Main />
			<NewItem />
		</div>
	);
};

export default Home;
