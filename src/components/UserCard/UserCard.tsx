import { Card, Gradient } from './UserCard.style';
import { gradients } from '../../utils/getGradient';

type Props = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
};

const UserCard = ({ data }: Props) => (
  <Card>
    <Gradient gradient={gradients[data?.id]} />
    <img src={data.avatar} alt="user" />
    <h4>{data.first_name}</h4>
    <p>{data.email}</p>
  </Card>
);

export default UserCard;
