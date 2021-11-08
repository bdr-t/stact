import { Container } from './Pagination.style';
import { response } from '../../data';

type Props = {
  paginate: (a: number) => void;
};

const Pagination = ({ paginate }: Props) => {
  // render method
  const RenderPagination = () => {
    const content: JSX.Element[] = [];
    for (let number = 1; number <= response.total_pages; number++) {
      content.push(
        <button type="button" onClick={() => paginate(number)} key={number}>
          {number}
        </button>
      );
    }
    return content.length > 0 ? <RenderPagination /> : null;
  };

  return (
    <Container>
      <RenderPagination />
    </Container>
  );
};

export default Pagination;
