import ContentGrid from '../components/ContentGrid/ContentGrid';
import Nav from '../components/Nav/Nav';
import Pagination from '../components/Pagination/Pagination';

type Props = {
  paginate: (a: number) => void;
  currentPage: number;
};

const Dashboard = ({ paginate, currentPage }: Props) => (
  <div style={{ width: '80%', margin: 'auto', minHeight: '100vh' }}>
    <Nav />
    <ContentGrid currentPage={currentPage} />
    <Pagination paginate={paginate} />
  </div>
);

export default Dashboard;
