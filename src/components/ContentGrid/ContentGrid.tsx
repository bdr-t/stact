import UserCard from '../UserCard/UserCard';
import { Container } from './ContentGrid.styles';
import { response } from '../../data';

type Props = {
  currentPage: number;
};

const ContentGrid = ({ currentPage }: Props) => {
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;

  const data = response.data.slice(startIndex, endIndex);

  const content = data.map((user) => <UserCard key={user.id} data={user} />);

  return <Container>{content}</Container>;
};

export default ContentGrid;
